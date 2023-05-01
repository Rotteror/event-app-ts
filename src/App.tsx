import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store";
import {
  fetchAllEvents,
  fetchSuggestedEvenets,
} from "./store/Event/eventActions";

import { Event, Login, Register, Home, NotFound, Wish } from "./pages";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
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
