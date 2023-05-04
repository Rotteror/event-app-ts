import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import {
  fetchAllEvents,
  fetchSuggestedEvenets,
} from "./store/Event/eventActions";
import { EventInterface } from "./models/index";

import { Event, Login, Register, Home, NotFound, Wish, Cart } from "./pages";
import Loader from "./components/shared/Loader";
import Header from "./components/Header/Header";

const Layout = () => {
  const loadingState: string = useAppSelector((state) => state.event.status);
  const events: EventInterface[] = useAppSelector(
    (state) => state.event.events
  );

  return (
    <div className="App">
      <Header />
      {loadingState === "success" && <Outlet />}
      {loadingState === "loading" && <Loader />}
      {(loadingState === "failed" || events.length === 0) && (
        <div>Something went wrong. Please try again</div>
      )}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      // Event Detail Page
      {
        path: "/event/:id",
        element: <Event />,
      },
      {
        path: "/wishlist",
        element: <Wish />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

// TODO Private Routes !!!

function App() {
  // fetch all events onload
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(fetchSuggestedEvenets());
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
