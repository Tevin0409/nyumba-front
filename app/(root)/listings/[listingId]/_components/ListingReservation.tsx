import React from "react";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";

import SpinnerMini from "@/components/Loader";
import { formatAmount } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (name: string, value: Range) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  disabledDates: Date[];
}

const Calendar = dynamic(() => import("@/components/common/Calender"), {
  ssr: false,
});

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabledDates,
  isLoading,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <span className="font-light text-neutral-600">Selling Price</span>
        <span className="text-lg font-semibold">{formatAmount(price)}</span>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={onChangeDate}
      />
      <hr />
      <div className="p-4">
        <Button
          disabled={isLoading}
          onClick={onSubmit}
          className="flex flex-row form-btn w-full items-center justify-center h-[42px] "
          size="lg"
        >
          {isLoading ? <SpinnerMini /> : <span>Reserve</span>}
        </Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <span>Total</span>
        <span>{formatAmount(totalPrice)} / Month</span>
      </div>
    </div>
  );
};

export default ListingReservation;
