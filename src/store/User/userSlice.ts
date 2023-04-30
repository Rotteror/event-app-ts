import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { EventInterface } from "../../models/index";
// import { Suggested, Attractions, Products, Venue } from "../../models/suggest";

type User = {
  name: string;
  gender: string;
  purchases: [];
  wishList: WishItem[];
};

type WishItem = {
  image: string;
  text: string;
  tickets: Number;
  eventId: string;
};

type State = {
  user: User;
};

const initialState: State = {
  user: {
    name: "Ivan",
    gender: "male",
    purchases: [],
    wishList: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },

    addWishList(state, action: PayloadAction<WishItem>) {
        // To DO - check for same wish list items, 
        // Persist Store - Perhaps ?!?
      state.user.wishList.push(action.payload);
    },
  },
});

export const { setUser, addWishList } = userSlice.actions;
export default userSlice.reducer;
