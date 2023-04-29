import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { EventInterface } from "../../models/index";
// import { Suggested, Attractions, Products, Venue } from "../../models/suggest";

type User = {
  name: string;
  gender: string;
  purchases: [];
  wishList: [];
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
    addWishList(state, action: PayloadAction<unknown>) {
      console.log(action.payload);
    //   state.user.wishList.push(action.payload);
      //   state.user.wishList.push(action);
    },
  },
});

export const { setUser, addWishList } = userSlice.actions;
export default userSlice.reducer;
