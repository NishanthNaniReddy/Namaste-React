import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Profile class componentDidMount");
    this.setState({
      count: 1,
    });
  }

  componentDidUpdate() {
    console.log("Profile class componentDidUpdate");
  }

  render() {
    console.log("render Profile class component");
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}

export default Profile;
