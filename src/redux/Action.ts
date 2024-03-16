import { BookingData } from "../component/Booking";
import { BOOKING, DELETE } from "./ActionType";

interface Data extends BookingData {
  id: any;
}

export const makeBooking = (payload: Data) => {
  return {
    type: BOOKING,
    payload,
  };
};

export const deleteBooking = (id: Data) => {
  return {
    type: DELETE,
    payload: id,
  };
};
