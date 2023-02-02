import { useEffect, useState } from "react";
import { FETCH_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_URL + resId?.id);
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data);
  }

  return restaurant;
};

export default useRestaurant;
