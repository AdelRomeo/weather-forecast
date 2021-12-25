import React, {useState} from "react";
import "./App.css";
import Search from "./components/search/Search";
import MainInfo from "./components/mainInfo/MainInfo";

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const handleSearch = (info) => {
    setWeatherInfo(info)
    console.log(info);
  }

  return (
    <div className="App">
      <Search getInfoWeather={handleSearch}/>
      {weatherInfo ? <MainInfo weatherInfo={weatherInfo}/> : <span>Ждем</span> }
    </div>
  );
}

export default App;
