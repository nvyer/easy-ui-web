import React from "react";
import { useNavBarStyles } from "./styles";
import { Link } from "easy-ui-react-lib";

const NavBar = ({ clicked }) => {
    const classes = useNavBarStyles();

    return (
        <>
            <div className={classes.NavBarContainer}>
                <nav className={classes.navBar}>
                    <div className={classes.navBarMenuTitleContainer}>
                        <svg
                            onClick={() => clicked()}
                            className={classes.burgerMenuIcon}
                            height="30px"
                            width="30px"
                            viewBox="0 0 30 30"
                            aria-hidden="true"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M4 7h22M4 15h22M4 23h22"
                            ></path>
                        </svg>
                    </div>
                    <div className={classes.navBarInfoContainer}>
                        <Link to="/easy-ui-web" color="secondary">Home</Link>
                        <Link color="secondary" to="https://github.com/aca-dec-2020/ui-lib.git">GitHub</Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavBar;

