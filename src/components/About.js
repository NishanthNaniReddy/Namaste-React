import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = (props) => {
  return (
    <div>
      <h1>About Us page</h1>
      <h2>This is the Namaste React Live course -- Nishanth</h2>
      <Profile name="Nishanth" />
      <ProfileClass name="Malavika" />
    </div>
  );
};

export default About;
