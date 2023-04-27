import Hero from "../../components/Hero/Hero";
import Search from "../../components/Search/Search";
import Events from "../../components/Events/Events";
import { useAppDispatch } from "../../store";
import { fetchSuggestedEvenets } from "../../store/eventActions";

const Home = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchSuggestedEvenets());
  return (
    <div>
      <Hero />
      <Search />
      <Events />
    </div>
  );
};

export default Home;