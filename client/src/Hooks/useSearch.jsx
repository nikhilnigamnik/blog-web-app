// useSearch.js
import { useState } from "react";
import { useSelector } from "react-redux";

function useSearch(initialData) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(initialData);
  const BlogData = useSelector((state) => state.apiData);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    const filteredResults = BlogData.filter((result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredResults);
  };

  return {
    query,
    data,
    handleSearch,
  };
}

export default useSearch;
