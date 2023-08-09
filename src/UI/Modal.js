import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide} />;
};
const OverlayModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const elementPortal = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onClick} />,
        elementPortal
      )}
      ,
      {ReactDOM.createPortal(
        <OverlayModal>{props.children}</OverlayModal>,
        elementPortal
      )}
    </>
  );
};

export default Modal;
