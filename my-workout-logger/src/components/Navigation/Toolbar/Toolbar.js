import React, { Component } from "react";
import { Menu, Icon } from "antd";
// import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItem/NavigationItem";

class Toolbar extends Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <NavigationItem link="/">Home</NavigationItem>
            {/* <Icon type="mail" />Navigation One */}
          </Menu.Item>
          <Menu.Item key="workouts">
            <NavigationItem link="/workouts">Workouts</NavigationItem>
          </Menu.Item>
          <Menu.Item key="newworkout">
            <NavigationItem link="/newworkout">New Workout</NavigationItem>
          </Menu.Item>
        </Menu>
        {/* <p>This will become the Toolbar </p>
        <NavigationItems /> */}
      </div>
    );
  }
}

export default Toolbar;
