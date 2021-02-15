import React from "react";

const NavBar = (props) => {
  return (
    <nav style={{ color: "#fff" }} className="navbar navbar-dark bg-dark">
      <span>
        <label style={{ fontWeight: "bold" }}>Counters</label>
        <span className="badge badge-pill badge-info m-2">
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
