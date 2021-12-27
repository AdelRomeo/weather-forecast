import React, {useState} from "react";
import "./App.css";
import Search from "./components/search/Search";
import MainInfo from "./components/mainInfo/MainInfo";

function App() {

  //массив с объектами. каждый объет содержит погоду для одного города
  const [weatherData, setWeatherData] = useState([])

  //вызывается в момент отправки формы (клик по конопке 'посмотреть погоду')
  const handleSearch = (info) => {
    setWeatherData(weatherData => [...weatherData, info])
  }

  return (
    <div className="App">
      <Search getInfoWeather={handleSearch}/>
      {weatherData.length > 0 ? <MainInfo weatherData={weatherData}/> : <span>Ждем</span> }
    </div>
  );
}

export default App;
