import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../redux/Action";
type TableProps = {};

const Table: React.FC<TableProps> = () => {
  const data = useSelector((state: any) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = parseInt(e.currentTarget.id);

    dispatch(deleteBooking(id));
  };
  return (
    <>
      {data.length > 0 && (
        <div className="max-w-6xl mx-auto mt-5 bg-white">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>DESTINATION FROM</th>
                  <th>DESTINATION TO</th>
                  <th>JOURNEY DATE</th>
                  <th>GUESTS</th>
                  <th>TRAVEL CLASS</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((booking: any, index: number) => (
                  <tr key={index}>
                    <th>{booking.from}</th>
                    <td>{booking.to}</td>
                    <td>{booking.date}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.ticketClassName}</td>

                    <td>
                      <button
                        id={`${booking.id}`}
                        onClick={(e) => handleDelete(e)}
                        className="btn-xs bg-red-500 text-white"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default Table;
