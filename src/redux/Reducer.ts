import { BOOKING, DELETE } from "./ActionType";

interface Action {
  type: string;
  payload: any;
}

interface State {
  data: any[];
}
const initialState = {
  data: [],
};

const BookingReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case BOOKING:
      const newData = [...state.data];
      newData.push(action.payload);
      return { data: newData };

    case DELETE:
      const filterData = state.data.filter((data) => {
        data.id !== action.payload;
      });
      return { data: filterData };

    default:
      return state;
  }
};

export default BookingReducer;
