import { db, auth } from "../firebase-config";
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

import { WishItem, User } from "../models/user-administration";

export async function addEventToWishList(data: WishItem) {
  const userRef = doc(db, "users", data.userId);
  await updateDoc(userRef, {
    wishlist: arrayUnion(data),
  });
}

export async function createUserDb(data: User) {
  if (auth.currentUser)
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      email: data.email,
      purchases: [],
      wishlist: [],
    });
}
