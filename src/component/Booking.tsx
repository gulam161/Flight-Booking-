import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/Action";

type BookingProps = {};

export interface BookingData {
  from?: string;
  to?: string;
  date?: string;
  guests?: string;
  ticketClassName?: string;
}
const Booking: React.FC<BookingProps> = () => {
  const data = useSelector((state: any) => state.data);
  const dispatch = useDispatch();
  const size = data.length;

  const [bookingData, setBookingData] = useState<BookingData>({});

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prevBookingData) => ({
      ...prevBookingData,
      [name]: value,
    }));
  };
  // console.log(bookingData);

  const handleBook = (e: FormEvent) => {
    e.preventDefault();

    // dispatch(makeBooking({ ...bookingData, id: size + 1 }));
    if (Object.keys(bookingData).length === 5) {
      dispatch(makeBooking({ ...bookingData, id: size + 1 }));
    } else {
      alert("Please select data properly");
    }
  };
  // console.log(bookingData);
  return (
    <div className="md:mt-[160px] mt-[100px] mx-4 relative ">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form action="" className="flex flex-col md:flex-row">
          {/* from */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination Form</p>
            <div className="flex flex-row">
              <select
                name="from"
                id="from"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option>Jammu</option>
                <option>Delhi</option>
                <option>Prayagraj</option>
                <option>Varanansi</option>
              </select>
            </div>
          </div>

          {/* Destination to */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination to</p>
            <div className="flex flex-row">
              <select
                name="to"
                id="to"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Banglore</option>
                <option>Chennai</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Journey Date</p>
            <input
              type="date"
              name="date"
              required
              onChange={(e) => handleChange(e)}
              className="outline-none p-2 w-full"
            />
          </div>

          {/* Guest option*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Guests</p>
            <div className="flex flex-row">
              <select
                name="guests"
                id="guests"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>
          </div>

          {/* travel class */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Travel Class</p>
            <div className="flex flex-row">
              <select
                name="ticketClassName"
                id="ticketClassName"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option>Bussiness</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            onClick={(e) => handleBook(e)}
            className="bg-indigo-500 text-white px-8 py-1 space-x-2 text-center flex justify-center items-center"
          >
            <FaPlus className="mr-2" /> Book Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Booking;
