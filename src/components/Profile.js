import { useState } from "react";

const Profile = (props) => {
  const [count] = useState(0);

  return (
    <div>
      <h1>Profile Component</h1>
      <h1>Name: {props.name}</h1>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Profile;
