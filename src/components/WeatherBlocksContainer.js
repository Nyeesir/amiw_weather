import WeatherBlock from "./WeatherBlock";
import '../componentStyles/WeatherBlocksContainer.css';

function WeatherBlocksContainer({weatherData, units}){
    let weatherDataDay = [];
    
    for (let i = 0; i < 7; i++){
        weatherDataDay[i] =
            {
                time: weatherData.time[i],
                weather_code: weatherData.weather_code[i],
                temperature_2m_max: weatherData.temperature_2m_max[i],
                temperature_2m_min: weatherData.temperature_2m_min[i],
                wind_speed_10m_max: weatherData.wind_speed_10m_max[i],
                wind_direction_10m_dominant: weatherData.wind_direction_10m_dominant[i]
            }
    }
    
    // return <div className={"weather-block-container"}>
    //     <WeatherBlock weatherData={weatherDataDay[0]} units={units}/>
    //     <WeatherBlock weatherData={weatherDataDay[1]} units={units}/>
    //     <WeatherBlock weatherData={weatherDataDay[2]} units={units}/>
    //     <WeatherBlock weatherData={weatherDataDay[3]} units={units}/>
    //     <WeatherBlock weatherData={weatherDataDay[4]} units={units}/>
    //     <WeatherBlock weatherData={weatherDataDay[5]} units={units}/>
    //     <WeatherBlock weatherData={weatherDataDay[6]} units={units}/>
    // </div>
    
    let weatherBlocks = []
    for (let i = 0; i < 7; i++){
        weatherBlocks[i] = <WeatherBlock weatherData={weatherDataDay[i]} units={units} key={i}/>
    }

    return (
        <div className={"weather-block-container"}>
            {weatherBlocks}
        </div>)
}

export default WeatherBlocksContainer;