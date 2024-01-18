import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meal Img" />
      </div>
    </>
  );
}
