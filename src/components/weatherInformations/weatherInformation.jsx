import './weatherInformation.css';

function WeatherInformations({ weather }) {
    if (!weather || !weather.weather) {
        return null;
    }

    return (
        <div className="weather-container">
            <h2 className="city-title">{weather.name}</h2>

            <div className="cards-container">
                <div className="weather-box side-box">
                    <div className="info-group">
                        <h3>Sensação</h3>
                        <p className="highlight">{Math.round(weather.main.feels_like)}°C</p>
                    </div>
                    <div className="info-group">
                        <h3>Umidade</h3>
                        <p className="highlight">{weather.main.humidity}%</p>
                    </div>
                </div>

                <div className="weather-box main-box">
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Ícone do clima"
                    />
                    <p className="temperature">{Math.round(weather.main.temp)}°C</p>
                    <p className="description">{weather.weather[0].description}</p>
                </div>

                <div className="weather-box side-box">
                    <div className="info-group">
                        <h3>Pressão</h3>
                        <p className="highlight">{weather.main.pressure} hPa</p>
                    </div>
                    <div className="info-group">
                        <h3>Vento</h3>

                        <p className="highlight">{weather.wind ? Math.round(weather.wind.speed * 3.6) : 0} km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherInformations;