import { useState, useRef } from 'react'
import axios from 'axios';
import WeatherInformation from './components/weatherInformations/weatherInformation';
import WeatherInformation5Days from './components/weatherInformation5Days/WeatherInformation5Days';

import './App.css'
import './components/weatherInformations/weatherInformation.css'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "f622e339889b0ae7a942cbecf95b698d"

    // URL 1: Clima Atual
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    // URL 2: Previsão de 5 Dias (Trocamos 'weather' por 'forecast')
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)
  }

  return (
    <div className="app-container">
      <div className="search-container">
        <h1>Previsão do Tempo</h1>
        <div className="input-group">
          <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
          <button onClick={searchCity}>Buscar</button>
        </div>
      </div>

      {/* Só mostra os componentes se as variáveis tiverem dados */}
      {weather && <WeatherInformation weather={weather}/>}
      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App