import { db, auth } from "../firebase-config";
import { doc, updateDoc, getDoc, arrayUnion, setDoc } from "firebase/firestore";

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

export async function getUser(userId: string): Promise<User | null> {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return docSnap.data() as User;

  return null;
  //TODO HANDLE ERROR
}
