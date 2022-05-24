import "./css/UserSearch.css";
import { useState } from "react";
const UserSearch = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <form>
      <div className="form-group w-25">
        <div className="input-group">
          <input
            type="text"
            name="search__text"
            id="search__text"
            className="form-control"
            placeholder="Search by first or last name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="input-group-append">
            <button className="search__btn">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UserSearch;
