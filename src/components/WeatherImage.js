import WeatherCodes from "../WeatherCodes.json";

function WeatherImage({code}) {
    return (
        <div className={"weather-image"}>
            <img src={WeatherCodes[code].day.image} alt={"zdj"}/>
        </div>
    )
}

export default WeatherImage;