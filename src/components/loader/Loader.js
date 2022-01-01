import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="Loader-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
