import "./todayh.css";

const TodayH = () => {
    return (
        <div className="t-h">
            <h2 className="t-h-title">
                Today's Hightlights
            </h2>
            <div className="t-h-wind">
                <div className="t-h-wind-title">Wind status</div>
                <div className="t-h-wind-speed">7
                </div>
                <div className="unid">mph</div>
            </div>
            <div className="t-h-humidity">
                <div className="t-h-humidity-title">Humidity</div>
                <div className="t-h-humidity-number">85</div>
                <div className="t-h-porcentage">%</div>
            </div>
            <div className="t-h-visibility">
            <div className="t-h-visibility-title">Visibility</div>
            <div className="t-h-visibility-number">6,4</div>
            <div className="unid-visibility">miles</div>
            </div>
            <div className="t-h-air-p">
            <div className="t-h-air-title">Air Pressure</div>
            <div className="t-h-air-number">998</div>
            <div className="unid-air">mb</div>
            </div>
        </div>
    )
}

export default TodayH
