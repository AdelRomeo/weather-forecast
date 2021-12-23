import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const getInfo = async () => {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Kansk&appid=7185b8463e509a9f3b3686b5007206ee&units=metric')
      console.log(response);
      console.log('log');
  }



  return (
    <div className="App">
      <button onClick={()=>getInfo()}>Click</button>
    </div>
  );
}

export default App;
