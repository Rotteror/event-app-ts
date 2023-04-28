// import "/wish.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import WishItem from "../../components/Wish/WishItem";
const Wish = () => {
  const currentWishList = useAppSelector(({ event }) => event.events[0]);
  const plainWish: any = [
    {
      image:
        "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
      text: `Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center even`,
      tickets: 8,
      eventId: "G5v0Z9JD6ndYG",
    },
  ];
  return (
    <div className="container">
      {plainWish.map((wish: any) => (
        <WishItem {...wish} />
      ))}
    </div>
  );
};

export default Wish;
