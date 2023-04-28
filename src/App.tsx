import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { useAppDispatch } from "./store";
import { fetchAllEvents } from "./store/Event/eventActions";

import { Home, NotFound, Event } from "./pages";

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
      // Event Detail Page
      {
        path: "/event/:id",
        element: <Event />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  // fetch all events onload
  const dispatch = useAppDispatch();
  dispatch(fetchAllEvents());

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
