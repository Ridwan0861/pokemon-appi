import { useAppDispatch, useAppSelector } from "../../hooks";

import classes from "./BurgerIcon.module.scss";
import { setOpenSidebar } from "../../store/slices";

export const BurgerIcon = () => {
  const dispatch = useAppDispatch();
  const { isOpenSidebar } = useAppSelector((state) => state.sidebar);

  const handleOpenSidebar = () => {
    dispatch(setOpenSidebar(!isOpenSidebar));
  };

  return (
    <div className={classes["burger-icon"]} onClick={handleOpenSidebar}>
      <i className="ri-menu-line"></i>
    </div>
  );
};
