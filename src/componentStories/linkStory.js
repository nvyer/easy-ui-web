import React from "react";
import { Link } from "easy-ui-react-lib";
import "./styles.css";

const LinkStory = () => {
  const defaultLink = `<Link to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>`;
  const secondaryLink = `<Link color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>`;
  let accesibility = `
  <Link
    onClick={() => console.log("clicked")}
    color="secondary"
    to={"https://github.com/aca-dec-2020/ui-lib"}
      >Easy-UI
  </Link>`;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, size(small, large), color(primary, secondary), onClick, to
        </p>
        <p className="component-title">Default</p>
        <Link to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
        <pre className="component-code">{defaultLink}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Secondary</p>
        <Link color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>
          Easy-UI
        </Link>
        <pre className="component-code">{secondaryLink}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Accessibility</p>
        <Link
          onClick={() => console.log("clicked")}
          color="secondary"
          to={"https://github.com/aca-dec-2020/ui-lib"}
        >
          Easy-UI
        </Link>
        <pre className="component-code long">{accesibility}</pre>
      </div>
    </>
  );
};

export default LinkStory;
