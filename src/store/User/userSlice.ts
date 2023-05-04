import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, WishItem } from "../../models/user-administration";

type State = {
  user: User;
};

const initialState: State = {
  user: {
    email: "",
    purchases: [],
    wishlist: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addWishList(state, action: PayloadAction<WishItem>) {
      state.user.wishlist.push(action.payload);
    },

    logoutUser(state) {
      state.user = { email: "", purchases: [], wishlist: [] };
    },

    setUser(state, action: PayloadAction<User>) {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, addWishList, logoutUser } = userSlice.actions;
export default userSlice.reducer;
