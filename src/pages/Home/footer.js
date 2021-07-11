import React from "react";
import { useFooterStyles } from "./styles";
import logo from "./logo/logo.png";
import { Link } from "easy-ui-react-lib";

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerLogoContainer}>
        <div style={{ height: "50px" }}>
          <img className={classes.logo} src={logo} alt="Easy UI logo" />
        </div>
        <span
          style={{ marginLeft: "-51px", width: "266px", marginTop: "26px", textAlign: "center" }}
        >
          <Link
            size="small"
            color="secondary"
            to="https://github.com/aca-dec-2020/ui-lib.git"
          >
            Free & Open Source (MIT)
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
