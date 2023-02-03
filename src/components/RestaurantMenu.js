import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const resId = useParams();
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-wrap">
        <div>
          <h1 className="font-medium">Restaurant Id: {resId?.id}</h1>
          <h2 className="font-medium">Restaurant Name: {restaurant?.name}</h2>
          <img
            className="w-100 p-2 m-2 shadow-lg bg-pink-50"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          ></img>
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
          <h3>{restaurant?.avgRatings}</h3>
        </div>
        <div>
          <h1 className="font-extrabold">Menu</h1>
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
