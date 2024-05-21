import Barn from "@/svg/lisitngTypes/barn";
import BedBreakfast from "@/svg/lisitngTypes/bed-breakfast";
import Cabin from "@/svg/lisitngTypes/cabin";
import Dome from "@/svg/lisitngTypes/dome";
import Flat from "@/svg/lisitngTypes/flat";
import GuestHouse from "@/svg/lisitngTypes/guest-house";
import Hotel from "@/svg/lisitngTypes/hotel";
import House from "@/svg/lisitngTypes/house";
import TinyHome from "@/svg/lisitngTypes/tiny-home";

export const listingTypes = [
  { name: "House", svgPath: <House /> },
  { name: "Apartment", svgPath: <Flat /> },
  { name: "Barn", svgPath: <Barn /> },
  { name: "Bed & breakfast", svgPath: <BedBreakfast /> },
  { name: "Cabin", svgPath: <Cabin /> },
  { name: "Dome", svgPath: <Dome /> },
  { name: "Guest house", svgPath: <GuestHouse /> },
  { name: "Hotel", svgPath: <Hotel /> },
  { name: "Tiny home", svgPath: <TinyHome /> },
];
