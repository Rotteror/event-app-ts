import { useAppDispatch, useAppSelector } from "./store";
import { fetchAllEvents } from "./store/eventActions";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import Events from "./components/Events/Events";

function App() {
  // fetch all events onload
  const dispatch = useAppDispatch();
  dispatch(fetchAllEvents());

  return (
    <div className="App">
      <Header />
      <Hero />
      <Search />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
