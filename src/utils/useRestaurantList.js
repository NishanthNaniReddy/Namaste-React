import { useCallback, useEffect, useState } from "react";
import { GET_RESTAURANT_LIST_URL } from "../config";
import { filterData } from "./common";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  //13.621866771594505, 79.42755268739286

  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANT_LIST_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handelButtonClick = useCallback((searchText, e) => {
    e.preventDefault();
    //need to filter the data
    const data = filterData(searchText, allRestaurants);
    // update the state - restaurants
    setFilteredRestaurants(data);
  });

  return [allRestaurants, filteredRestaurants, handelButtonClick];
};

export default useRestaurantList;
