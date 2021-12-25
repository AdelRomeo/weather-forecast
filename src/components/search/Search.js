import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search({getInfoWeather}) {
  //название и изменение названия города
  const [cityName, setCityName] = useState("");

  //отправка запроса на сервер и получение данных о погоде
  const getInfo = async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7185b8463e509a9f3b3686b5007206ee`
    );
    getInfoWeather(response.data.main);
  };

  return (
    <div className="Search">
      <input
        placeholder="Введите название города"
        type="text"
        className="Search_input"
        value={cityName}
        onChange={(event)=>setCityName(event.target.value)}
      />
      <button className="Search_send" onClick={()=>getInfo(cityName)}>ПОСМОТРЕТЬ ПОГОДУ</button>
    </div>
  );
}
