import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ onShowCart }) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meal Img" />
      </div>
    </Fragment>
  );
}
