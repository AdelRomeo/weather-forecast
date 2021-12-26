import React from "react";
import "./MainInfo.css";

export default function MainInfo({ weatherData, num }) {
  const { cityName, speed, humidity, temp, feels_like } = weatherData;

  console.log(weatherData);

  return (
    <div className="MainInfo_container">
      {num.map(() => {
        return (
          <div className="MainInfo_card">
            <h2 className="MainInfo_city">{cityName}</h2>
            <ul className="MainInfo_list-indication">
              <li className="MainInfo_item-indication">
                <span>Температура: {temp}</span>
              </li>
              <li className="MainInfo_item-indication">
                <span>Ощущается как: {feels_like}</span>
              </li>
              <li className="MainInfo_item-indication">
                <span>Влажность воздуха: {humidity}</span>
              </li>
              <li className="MainInfo_item-indication">
                <span>Ветер: {speed}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
