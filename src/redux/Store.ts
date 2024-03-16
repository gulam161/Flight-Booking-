import { legacy_createStore } from "redux";
import BookingReducer from "./Reducer";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = legacy_createStore(BookingReducer);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
