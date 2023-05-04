import "./cart.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/index";
import WishItem from "../../components/Wish/WishItem";
import { auth } from "../../firebase-config";
import { fetchUser, clearAllPurchases } from "../../store/User/userAction";
import { EmptyState } from "../../components/shared/EmptyState";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    if (userId) dispatch(fetchUser(userId));
  }, []);

  const currentCartList = useAppSelector((state) => state.user.user.purchases);

  const currentTickets = useAppSelector((state) =>
    state.user.user.purchases
      .map((item) => item.tickets)
      // ref:https://bobbyhadz.com/blog/typescript-operator-plus-cannot-be-applied-to-types-number#:~:
      // text=The%20error%20%22Operator%20'%2B',n%20in%20your%20TypeScript%20code.
      .reduce((acc, val) => Number(acc) + Number(val), 0)
  );

  if (currentTickets === 0) return <EmptyState />;
  const onClick = () => {
    alert(`Congrats you succesfully bought ${currentTickets}`);
    dispatch(clearAllPurchases(userId!));
    navigate(`/`);
  };

  return (
    <div className="cart-list">
      <div className="container">
        {currentCartList.map((wish: any) => (
          <WishItem {...wish} key={wish.eventId} />
        ))}
      </div>
      <button className="cta-cart" onClick={onClick}>
        Buy {"" + currentTickets} tickets
      </button>
    </div>
  );
};

export default Cart;
