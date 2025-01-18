import './App.css';
import './components/WeatherBlock';
import Navbar from "./components/Navbar";
import MainWeatherBlock from "./components/MainWeatherBlock";
import WeatherBlocksContainer from "./components/WeatherBlocksContainer";
import {useEffect, useState} from "react";
import Loading from "./components/Loading";

function App() {
    const miasto = "Mysłowice";
    
    const weatherApiUri = "https://api.open-meteo.com/v1/forecast?latitude=50.2075&longitude=19.1667&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto";
    //const weatherApiUri = "";
    
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await fetch(weatherApiUri)
            const json = await data.json()
            setWeatherData(json);
        }
    fetchWeatherData().catch((err) => console.log(err));}, []);
    
    if (weatherData) {
        return (
            <div className={"app"}>
                <MainWeatherBlock weatherData={weatherData.current} units={weatherData.current_units} miasto={miasto}/>
                <WeatherBlocksContainer weatherData={weatherData.daily} units={weatherData.daily_units}/>
            </div>
        );
    } else {
        return (
            <div className={"app"}>
                <Loading />
            </div>
        )
    }
}

export default App;
