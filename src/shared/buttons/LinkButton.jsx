import {Link} from "react-router-dom";
import React from "react";

const LinkButton = ({to, label, className = 'btn-dark'}) => {
  return <div className={"btn " + className}>
      <Link
          to={to}
          style={{ color: "#fff", textDecoration: "none" }}
      >
          {label}
      </Link>
  </div>
};

export default LinkButton;