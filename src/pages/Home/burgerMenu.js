import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../helper/routes";
import { useBurgerMenuStyles } from "./styles";

const BurgerMenu = () => {
  const classes = useBurgerMenuStyles();

  return (
    <div className={classes.burgerMenuContainer}>
      <span style={{ color: "#5d5987", cursor: "default" }}>
        <p style={{ fontWeight: 500 }}>Easy-UI</p>
        <p style={{ fontSize: "13px", marginTop: "-15px" }}>version: 1.0.4</p>
        <p style={{
          margin: "5px",
          fontWeight: 600,
          fontSize: "21px"
        }}>Components</p>
      </span>
      <div className={classes.componentContainer}>
        {Routes.map(({ route, title }) => (
          <Link to={route} className={classes.burgerMenuItem} key={route}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
