import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("code") || ""
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchParams({ code: searchQuery });
  };

  return (
    <div className="pt-3 pb-4 px-4 mt-2 mb-3 border-black border-2 rounded-md bg-secondary">
      <form
        className="flex flex-wrap gap-3 items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="client-id">保戶編號</label>
        <input
          id="client-id"
          className="border-black border-2 w-40 rounded-sm px-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="text-white bg-primary outline-none border-black border-2 px-6 py-.5">
          查詢
        </button>
      </form>
    </div>
  );
}

export default Search;
