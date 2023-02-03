import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link, Outlet } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, filteredRestaurants, handelButtonClick] =
    useRestaurantList();

  const offLine = useOnline();

  if (!offLine) {
    return <h1>🔴 Please check your internet connection</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={(e) => handelButtonClick(searchText, e)}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
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
