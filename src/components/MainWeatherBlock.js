import '../componentStyles/MainWeatherBlock.css';
import arrow from '../arrow.png'
import WeatherImage from "./WeatherImage";
import WeatherDirectionArrow from "./WindDirectionArrow";
import WeatherCodes from "../WeatherCodes.json";

function MainWeatherBlock({weatherData, units, miasto}) {
    
    return (
        <div className={"main-weather-block"} style={{background: WeatherCodes[weatherData.weather_code].background}}>
            <div className={"inner-weather-block"}>
                <div className={"weather-title"}>
                    <h1>Pogoda teraz - {miasto}</h1>
                    <h1>{WeatherCodes[weatherData.weather_code].day.description}</h1>
                </div>
                <div className={"weather-details"}>
                    <div className={"weather-info"}>
                        <h2>Temperatura: {weatherData.temperature_2m} {units.temperature_2m}</h2>
                        <h2>Wilgotność: {weatherData.relative_humidity_2m} {units.relative_humidity_2m}</h2>
                        <h2>Prędkość wiatru: {weatherData.wind_speed_10m} {units.wind_speed_10m}</h2>
                        <h2>
                            Kierunek wiatru: {weatherData.wind_direction_10m} {units.wind_direction_10m}
                            <WeatherDirectionArrow direction={weatherData.wind_direction_10m} />
                        </h2>
                    </div>
                    <WeatherImage code={weatherData.weather_code}/>
                </div>
            </div>
        </div>
)
}

export default MainWeatherBlock;