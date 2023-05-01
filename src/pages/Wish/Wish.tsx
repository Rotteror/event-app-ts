import "./wish.css";
import jsPDF from "jspdf";
import { useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/index";
import WishItem from "../../components/Wish/WishItem";
import { auth } from "../../firebase-config";
import { fetchUser } from "../../store/User/userAction";

const Wish = () => {
  const wishTemplate = useRef("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth.currentUser?.uid) dispatch(fetchUser(auth.currentUser?.uid));
  }, [auth.currentUser?.uid]);

  const currentWishList = useAppSelector((state) => state.user.user.wishlist);

  const handleGeneratePdf = async () => {
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "letter",
      putOnlyUsedFonts: true,
      compress: true,
    });

    pdf.setFont("Inter-Regular", "sans-serif");

    await pdf.html(wishTemplate.current, {
      width: 580,
      windowWidth: 880,
      margin: 0,
      filename: `my-wishlist`,
    });
    await pdf.save();
  };

  return (
    <div className="wish-list">
      <button className="button-pdf" onClick={handleGeneratePdf}>
        Download as PDF
      </button>
      <div className="container" ref={wishTemplate as any}>
        {currentWishList.map((wish: any) => (
          <WishItem {...wish} />
        ))}
      </div>
    </div>
  );
};

export default Wish;
