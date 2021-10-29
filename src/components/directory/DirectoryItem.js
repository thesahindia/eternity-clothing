import React from "react";
import "./DirectoryItem.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const DirectoryItem = ({ title, img, size, history, path }) => {
  return (
    <div
      className={`${size} directory-item`}
      onClick={() => history.push(`collections${path}`)}
    >
      <div
        className="background-img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(DirectoryItem);
