import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div>
      <form>
        <div className="relative">
          <div className="w-4 text-blue-800 absolute top-3 left-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="w-full bg-indigo-50 rounded-md pl-10 h-12 text-indigo-900 outline-none focus:ring-2 focus:ring-blue-600 text-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
