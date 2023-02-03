import { useState } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />

      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/body">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {/* {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>
          <Link>Login</Link>
        </button>
      ) : ( */}
      <div>{isOnline ? "🟢" : "🔴"}</div>
      <button onClick={() => setLoggedIn(true)}>
        <Link to="/">LogOut</Link>
      </button>
      {/* )} */}
    </div>
  );
};

export default Header;
