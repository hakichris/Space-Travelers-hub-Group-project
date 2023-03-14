import { useSelector, useDispatch } from 'react-redux';

export const useAppSelctor = (fn) => useSelector(fn);
export const useAppDispatch = () => useDispatch();
