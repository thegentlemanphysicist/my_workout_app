import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.css";

const NavigationItem = props => (
  <div>
    <NavLink to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </div>
);

export default NavigationItem;
