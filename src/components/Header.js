import { useState } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/body">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
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
