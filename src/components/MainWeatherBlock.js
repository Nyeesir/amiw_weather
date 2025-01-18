import '../componentStyles/MainWeatherBlock.css';
import arrow from '../arrow.png'
import WeatherImage from "./WeatherImage";
import WeatherDirectionArrow from "./WindDirectionArrow";
import WeatherCodes from "../WeatherCodes.json";

function MainWeatherBlock({weatherData, units, miasto}) {
    
    return (
        <div className={"main-weather-block"}>
            <h1>Pogoda teraz - {miasto}</h1>
            <h2>{WeatherCodes[weatherData.weather_code].day.description}</h2>
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
)
}

export default MainWeatherBlock;