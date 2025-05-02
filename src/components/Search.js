import { useRef } from "react";

import { useKey } from "../hooks/useKey";

export default function Search({ query, onSearch }) {
  const inputEl = useRef(null);

  useKey("Enter", () => inputEl.current?.focus());

  return (
    <input
      ref={inputEl}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
