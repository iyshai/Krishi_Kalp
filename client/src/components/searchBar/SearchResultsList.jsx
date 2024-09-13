import "./SearchResultsList.css";
import { SearchResult } from "./SearchReasult.jsx";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

export default SearchResultsList