import React from "react";
import "./Style/hamburger.css";
const HamburgerIcon = (props) => {
  return (
    <>
      <div className="hamburger-icon" onClick={props.onClick} style={{left:props.left, right:props.right, top: props.top}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          width={"2rem"}
          height={"2rem"}
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </>
  );
};

export default HamburgerIcon;
