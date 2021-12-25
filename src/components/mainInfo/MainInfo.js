import React from "react";
import "./MainInfo.css";

export default function MainInfo({weatherInfo}) {

  const {temp} = weatherInfo

  return (
    <div className="MainInfo_container">
      <div className="MainInfo_card">
        <h2 className="MainInfo_city">Kansk</h2>
        <span>Температура: {temp}</span>
      </div>
    </div>
  );
}
