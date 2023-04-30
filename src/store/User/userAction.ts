import { addWishList, setUser } from "./userSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { addEventToWishList, createUserDb } from "../../service/userService";

import { User, WishItem } from "../../models/user-administration";

export const addWishItemToDb = (
  item: WishItem
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, _) => {
    await addEventToWishList(item);
    dispatch(addWishList(item));
  };
};

export const createUser = (
  item: User
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    // if (getState().user.user) return;
    await createUserDb(item);
    dispatch(setUser(item));
  };
};
