import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, Outlet } from "react-router-dom";
import { filterData } from "../utils/common";
import useRestaurantList from "./useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants, handelButtonClick } =
    useRestaurantList();

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={(e) => handelButtonClick(searchText, e)}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={"restaurant/" + restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Body;
