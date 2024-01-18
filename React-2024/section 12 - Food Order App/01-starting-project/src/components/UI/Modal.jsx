import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

function BackDrop({ onHideCart }) {
  return <div className={classes.backdrop} onClick={onHideCart}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

export default function Modal({ onHideCart, children }) {
  return (
    <Fragment>
      {createPortal(<BackDrop onHideCart={onHideCart} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
}
