import React from "react";
import "./MainInfo.css";

export default function MainInfo({ weatherData }) {

  //удаление лишних цифр в значениях (-21.11 => -21)
  const сutExcess = (num) => {
    const str = String(num);
    let dot = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        dot = i;
      }
    }
    return str.slice(0, dot);
  };

  return (
    <div className="MainInfo_container">
      {weatherData.map((item) => {
        return (
          <div className="MainInfo_card" key={item.id}>
            <h2 className="MainInfo_city">{item.cityName}</h2>
            <ul className="MainInfo_list-indication">
              <li className="MainInfo_item-indication">
                <span>Температура: {сutExcess(item.temp)}С&deg;</span>
              </li>
              <li className="MainInfo_item-indication">
                <span>Ощущается как: {сutExcess(item.feels_like)}С&deg;</span>
              </li>
              <li className="MainInfo_item-indication">
                <span>Влажность воздуха: {item.humidity}%</span>
              </li>
              <li className="MainInfo_item-indication">
                <span>Ветер: {сutExcess(item.speed)}м/с</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
