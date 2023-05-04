import { addWishList, setUser } from "./userSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import {
  addEventToWishList,
  createUserDb,
  getUser,
} from "../../service/userService";

import { User, WishItem } from "../../models/user-administration";

export const addWishItemToDb = (
  item: WishItem
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const alreadyAdded = getState().user.user.wishlist.find(
      (wish) => wish.eventId === item.eventId
    );
    if (alreadyAdded) return;

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

export const fetchUser = (
  userId: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, _) => {
    const user: User | null = await getUser(userId);
    if (user) dispatch(setUser(user));
  };
};
