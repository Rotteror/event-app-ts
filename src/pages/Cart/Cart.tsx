import "./cart.css";
import { useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/index";
import WishItem from "../../components/Wish/WishItem";
import { auth } from "../../firebase-config";
import { fetchUser } from "../../store/User/userAction";
import {EmptyState} from "../../components/shared/EmptyState"

const Cart = () => {
  const wishTemplate = useRef("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth.currentUser?.uid) dispatch(fetchUser(auth.currentUser?.uid));
  }, []);

  const currentCartList = useAppSelector((state) => state.user.user.purchases);

  if(currentCartList.length === 0) return <EmptyState/>

  const onClick = () => {}

  return (
    <div className="cart-list">
      <div className="container" ref={wishTemplate as any}>
        {currentCartList.map((wish: any) => (
          <WishItem {...wish} key={wish.eventId} />
        ))}
      </div>
      <button onClick={onClick}>Buy {currentCartList.length} tickets</button>
    </div>
  );
};

export default Cart;
