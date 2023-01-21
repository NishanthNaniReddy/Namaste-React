import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const resId = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=13.0826802&lng=80.2707184&menuId=" +
        resId?.id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>Restaurant Id: {resId?.id}</h1>
          <h2>Restaurant Name: {restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
          <h3>{restaurant?.avgRatings}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>
                {item?.name} : {item?.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;