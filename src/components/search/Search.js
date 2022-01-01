import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search({
  getInfoWeather,
  getShowLoader,
  getShowError,
}) {
  //название и изменение названия города
  const [cityName, setCityName] = useState("");

  //отправка запроса на сервер и получение данных о погоде
  const getInfo = async (event, city) => {
    event.preventDefault();
    //показываем лоадер
    getShowLoader(true);

    try {
      //отправляем запрос на сервер
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7185b8463e509a9f3b3686b5007206ee`
      );
      //скрываем лоадер
      getShowLoader(false);
      //очищаем название города
      setCityName("");
      //объект для отображения даных
      const currentData = {
        ...response.data.main,
        ...response.data.wind,
        id: response.data.id,
        cityName,
      };
      //отправляем отбъет с данными
      getInfoWeather(currentData);
      //скрываем ошибку если она была
      getShowError(false);

    } catch (e) {
      //показываем ошибку
      getShowError(true);
      //скрываем лоадер
      getShowLoader(false);
    }
  };

  return (
    <form className="Search">
      <input
        placeholder="Введите название города"
        type="text"
        className="Search_input"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
      />
      <button
        className="Search_send"
        onClick={(event) => getInfo(event, cityName)}
      >
        ПОСМОТРЕТЬ ПОГОДУ
      </button>
    </form>
  );
}
