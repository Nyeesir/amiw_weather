import arrow from "../arrow.png";

function WeatherDirectionArrow({direction}) {
    return (
        <img src={arrow} alt={"strzałka"} className={"arrow"}
             style={{rotate: direction + "deg"}}/>
    )
}

export default WeatherDirectionArrow