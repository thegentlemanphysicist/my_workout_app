import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/workouts">Workouts</NavigationItem>
    <NavigationItem link="/newworkout">New Workout</NavigationItem>
  </ul>
);

export default NavigationItems;
