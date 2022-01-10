import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import MainInfo from "./components/mainInfo/MainInfo";
import Waiting from "./components/waiting/Waiting";
import Loader from './components/loader/Loader';
import Error from './components/Error/Error';

function App() {
  //массив с объектами. каждый объет содержит погоду для одного города
  const [weatherData, setWeatherData] = useState([]);

  //показ лоадера
  const [showLoader, setShowLoader] = useState(false)

  //показ сообщения о том, что произошла ошибка
  const [showError, setShowError] = useState(false)

  //вызывается в момент отправки формы (клик по кнопке 'посмотреть погоду')
  const handleSearch = (info) => {
    setWeatherData((weatherData) => [...weatherData, info]);
  };
  
  //удаление карточки (клик по крестику)
  const handleDeletCard = (card) => {
    setWeatherData((weatherData) =>
      weatherData.filter((elem) => elem !== card)
    );
  };

  return (
    <div className="App">
      <Search getInfoWeather={handleSearch} getShowLoader={setShowLoader} getShowError={setShowError}/>
      {showError && <Error/>}
      {weatherData.length > 0 ? (
        <MainInfo weatherData={weatherData} deletCard={handleDeletCard} />
      ) : (
        <Waiting/>
      )}
      {showLoader && <Loader/>}
    </div>
  );
}

export default App;
