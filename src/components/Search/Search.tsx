import "./search.css";
import { useState } from "react";
import { useAppDispatch } from "../../store";

import CustomSelect from "./customSelect";

import { keywordOptions, categoryOptions } from "../../constants";
import { fetchFilteredEvents } from "../../store/Event/eventActions";

const Search = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState(categoryOptions[0]);
  const [keyword, setKeyword] = useState(keywordOptions[0]);

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (category === "" && keyword === "") return;

    dispatch(fetchFilteredEvents(keyword, category));
  };

  return (
    <div className="container">
      <div className="search">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            placeholder="Search by category or name"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <CustomSelect
            value={category}
            onChange={setCategory}
            options={categoryOptions}
          />
          <CustomSelect
            value={keyword}
            onChange={setKeyword}
            options={keywordOptions}
          />
          <button type="submit" className="search-cta">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
