import React from "react";
import { useBodyStyles } from "./styles";
import logo from "./logo/logo.png";

const Body = () => {
    const classes = useBodyStyles();

    return (
        <div className={classes.bodyContainer}>
            <img src={logo} className={classes.logo} alt="Easy UI logo" />
            <p className={classes.bodyDescription}>React Component Library</p>
        </div>
    )
};

export default Body;