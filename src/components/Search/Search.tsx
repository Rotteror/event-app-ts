import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <form className="search-form">
        <input
          className="search-input"
          placeholder="Search by category or name"
        />
        <button type="submit" className="search-cta">
          &#10148;
        </button>
      </form>
    </div>
  );
};

export default Search;
