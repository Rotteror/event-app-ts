import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, WishItem } from "../../models/user-administration";

type State = {
  user: User;
};

const initialState: State = {
  user: {
    email: "",
    purchases: [],
    wishList: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = { ...action.payload };
    },

    addWishList(state, action: PayloadAction<WishItem>) {
      const id = action.payload.eventId;
      if (state.user.wishList.filter((wishItem) => wishItem.eventId === id))
        return;
      state.user.wishList.push(action.payload);
    },
  },
});

export const { setUser, addWishList } = userSlice.actions;
export default userSlice.reducer;
