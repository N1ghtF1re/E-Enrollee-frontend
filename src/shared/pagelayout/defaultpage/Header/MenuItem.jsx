import React from "react";
import {NavLink} from "react-router-dom";

const MenuItem = ({title, link}) => (
    <NavLink className="nav-item nav-link" to={link} activeClassName='active'>{title}</NavLink>
);

export default MenuItem;