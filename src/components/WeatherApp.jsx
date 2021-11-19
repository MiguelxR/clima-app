import "./wheatherapp.css";
import HeavyCloud from "../img/HeavyCloud.png"
import TimeWeek from "./TimeWeek";
import TodayH from "./TodayH";
import TodayTime from "./TodayTime";
import Search from "./Search";
import ApiFetch from "./ApiFetch";

const WeatherApp = () => {
    return (
        <div className="w">
            <div className="w-left">
                <div className="w-left-wrapper">
                    <Search/>
                    <TodayTime/>
                </div>
            </div>
            <div className="w-right">
                <div className="w-right-wrapper">
                    <TimeWeek/>
                    <TodayH/>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
