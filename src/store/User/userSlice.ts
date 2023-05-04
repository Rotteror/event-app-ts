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

    addBoughtItem(state, action: PayloadAction<WishItem>) {
      state.user.purchases.push(action.payload);
    },

    clearCart(state) {
      state.user.purchases = [];
    },

    logoutUser(state) {
      state.user = { email: "", purchases: [], wishlist: [] };
    },

    setUser(state, action: PayloadAction<User>) {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, addBoughtItem, addWishList, clearCart, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;
