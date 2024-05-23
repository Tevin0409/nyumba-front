"use client";
import React, {
  ReactNode,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  eachDayOfInterval,
} from "date-fns";
import { Range } from "react-date-range";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import ListingReservation from "./ListingReservation";
import { createLease } from "@/lib/actions/leases.actions";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingClientProps {
  reservations?: {
    startDate: Date;
    endDate: Date;
  }[];
  children: ReactNode;
  id: string;
  title: string;
  price: number;
  user: User | undefined;
}

const ListingClient: React.FC<ListingClientProps> = ({
  price,
  reservations = [],
  children,
  user,
  id,
  title,
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const queryClient = useQueryClient();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });
    return dates;
  }, [reservations]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const maxDurationDays = 1095;
      const leaseDurationDays = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (leaseDurationDays < 1 || leaseDurationDays > maxDurationDays) {
        toast.success("Lease duration must be between 1 and 36 months.");
        // throw new Error("Lease duration must be between 1 and 36 months.");
      }

      if (leaseDurationDays && price) {
        const dailyPayment = price / leaseDurationDays;

        const averageDaysInMonth = 30.44;
        const monthlyPayment = dailyPayment * averageDaysInMonth;
        setTotalPrice(monthlyPayment);
      } else {
        setTotalPrice(price);
      }
    }
  }, [dateRange.endDate, dateRange.startDate, price]);

  const onCreateReservation = () => {
    if (!user) return toast.error("Please log in to reserve listing.");
    startTransition(async () => {
      try {
        const { endDate, startDate } = dateRange;

        const response = await createLease(id, {
          tenant: user.id,
          propertyDetails: id,
          leaseTerms: totalPrice,
          startDate,
          endDate,
        });
        // router.push("/leases");
        if (response.success) {
          toast.success(`You've successfully reserved "${title}".`);
          router.push("/leases");
        } else if (response.error) {
          toast.error(response.error);
        }

        // queryClient.invalidateQueries(["trips", user.id]);
        // queryClient.invalidateQueries(["reservations", user.id]);
      } catch (error: any) {
        toast.error(error?.message);
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
      {children}

      <div className="order-first mb-10 md:order-last md:col-span-3">
        <ListingReservation
          price={price}
          totalPrice={totalPrice}
          onChangeDate={(name, value) => setDateRange(value)}
          dateRange={dateRange}
          onSubmit={() => onCreateReservation()}
          isLoading={isLoading}
          disabledDates={disabledDates}
        />
      </div>
    </div>
  );
};

export default ListingClient;
