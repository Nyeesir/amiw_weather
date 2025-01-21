import '../componentStyles/WeatherBlock.css';
import WeatherDirectionArrow from "./WindDirectionArrow";
import WeatherImage from "./WeatherImage";
import WeatherCodes from "../WeatherCodes.json";

function WeatherBlock({weatherData, units}) {
    return(
        <div className={"weather-block"} style={{background: WeatherCodes[weatherData.weather_code].background}}>
            <div className={"inner-weather-block"}>
                <h1>{weatherData.time}</h1>
                <h2>{WeatherCodes[weatherData.weather_code].day.description}</h2>
                <div className={"weather-info"}>
                    <p>Temperatura max: {weatherData.temperature_2m_max} {units.temperature_2m_max}</p>
                    <p>Temperatura min: {weatherData.temperature_2m_min} {units.temperature_2m_min}</p>
                    <p>Max prędkość wiatru: {weatherData.wind_speed_10m_max} {units.wind_speed_10m_max}</p>
                    <p>
                        Główny kierunek wiatru: {weatherData.wind_direction_10m_dominant} {units.wind_direction_10m_dominant}
                        <WeatherDirectionArrow direction={weatherData.wind_direction_10m_dominant} />
                    </p>
                </div>
                <WeatherImage code={weatherData.weather_code}/>
            </div>
        </div>
    )
}

export default WeatherBlock;