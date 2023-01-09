import React from "react";
import SearchBar from "../utils/searchBar";
import UserLogo from "../utils/userLogo";
import "../style/hedaer.scss";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="leftA">
          <div className="headerTitle">대시보드</div>
        </div>
        <div className="rightA">
          <div className="searchBar">
            <SearchBar />
          </div>
          <div className="userLogo">
            <UserLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
