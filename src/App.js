import React, {useState} from "react";
import "./App.css";
import Search from "./components/search/Search";
import MainInfo from "./components/mainInfo/MainInfo";

function App() {

  //объет с информацией о погоде
  const [weatherData, setWeatherData] = useState(null)

  const num = [1,2,3]

  const handleSearch = (info) => {
    setWeatherData(info)
    console.log(info);
  }

  return (
    <div className="App">
      <Search getInfoWeather={handleSearch}/>
      {weatherData ? <MainInfo weatherData={weatherData} num={num}/> : <span>Ждем</span> }
    </div>
  );
}

export default App;
