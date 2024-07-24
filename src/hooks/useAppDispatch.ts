import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
