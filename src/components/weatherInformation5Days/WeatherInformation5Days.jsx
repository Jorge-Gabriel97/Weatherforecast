import './WeatherInformation5Days.css'

function WeatherInformation5Days({ weather5Days }) {
    console.log(weather5Days)

    if (!weather5Days || !weather5Days.list) {
        return null;
    }

    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit" })
        return newDate;
    }

    return (
        <div className="forecast-container">
            <h3 className="forecast-title">Previsão dos próximos 5 dias</h3>

            {/* Nova div para abraçar os 5 cartões e deixá-los lado a lado */}
            <div className="forecast-list">
                {next5DaysForecast.map(forecast => (
                    <div key={forecast.dt} className="forecast-item">
                        <p className="forecast-day">{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Ícone do tempo" />
                        <p className="forecast-description">{forecast.weather[0].description}</p>
                        <p className="forecast-temp">
                            <span className="min">{Math.round(forecast.main.temp_min)}°C Min</span> / <span className="max">{Math.round(forecast.main.temp_max)}°C Max</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInformation5Days;