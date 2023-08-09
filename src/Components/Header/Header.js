import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={classes.title}>
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;
