import React from "react";
import { BreadCrumbs } from "easy-ui-react-lib";
import "./styles.css";

const BreadCrumbsStory = () => {
  const primaryBreadCrumbs = `
    <BreadCrumbs separator=" >" breadcrumbsStyle="crumbs--primary">
      <a>Google</a>
      <a>FaceBook</a>
      <a>Instagram</a>
    </BreadCrumbs>
  `;

  const destructiveBreadCrumbs = `
  <BreadCrumbs separator="|" breadcrumbsStyle="crumbs--destructive">
    <a>Google</a>
    <a>FaceBook</a>
    <a>Instagram</a>
  </BreadCrumbs>
  `;

  const tagBreadCrumbs = `
  <BreadCrumbs separator="|" tag>
    <a>Google</a>
    <a>FaceBook</a>
    <a>Instagram</a>
  </BreadCrumbs>
  `;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, breadcrumbsStyle, separator, tag
        </p>
        <p className="component-title">Primary</p>
        <BreadCrumbs separator=">" breadcrumbsStyle="crumbs--primary">
          <p>Google</p>
          <p>FaceBook</p>
          <p>Instagram</p>
        </BreadCrumbs>
        <pre className="component-code long">{primaryBreadCrumbs}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <BreadCrumbs separator="|" breadcrumbsStyle="crumbs--destructive">
          <p>Google</p>
          <p>FaceBook</p>
          <p>Instagram</p>
        </BreadCrumbs>
        <pre className="component-code long">{destructiveBreadCrumbs}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Tag Crumbs</p>
        <BreadCrumbs separator="|" tag>
          <p>Google</p>
          <p>FaceBook</p>
          <p>Instagram</p>
        </BreadCrumbs>
        <pre className="component-code long">{tagBreadCrumbs}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">If the path is longer than 5</p>
        <BreadCrumbs separator="|" tag>
          <p>Google</p>
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkdin</p>
          <p>VK</p>
        </BreadCrumbs>
        <pre className="component-code long">{tagBreadCrumbs}</pre>
      </div>
    </>
  );
};

export default BreadCrumbsStory;
