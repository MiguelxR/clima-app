import "./timeweek.css";
import Sleet from "../img/Sleet.png";
import Clear from "../img/Clear.png";
import LightRain from "../img/LightRain.png";
import Shower from "../img/Shower.png";
import Hail from "../img/Hail.png";

const TimeWeek = () => {
    return (
        <div className="t">
                <div className="box-day">
                    <p className="t-day">Tomorrow</p>
                    <img 
                    src={Shower}
                    alt=""
                    className="icon-box"
                    />
                    <p className="degrees-1">
                        16°C 
                    </p>
                    <p className="degrees-2">
                        11°C
                    </p>
                </div>
                <div className="box-day">
                <p className="s-day">Sun,</p>
                    <img 
                    src={Shower}
                    alt=""
                    className="icon-box"
                    />
                    <p className="degrees-1">
                        16°C 
                    </p>
                    <p className="degrees-2">
                        11°C
                    </p>
                </div>
                <div className="box-day">
                <p className="m-day">Mon,</p>
                    <img 
                    src={Shower}
                    alt=""
                    className="icon-box"
                    />
                    <p className="degrees-1">
                        16°C 
                    </p>
                    <p className="degrees-2">
                        11°C
                    </p>
                </div>
                <div className="box-day">
                <p className="t-day">Tue,</p>
                    <img 
                    src={Shower}
                    alt=""
                    className="icon-box"
                    />
                    <p className="degrees-1">
                        16°C 
                    </p>
                    <p className="degrees-2">
                        11°C
                    </p>
                </div>
                <div className="box-day">
                <p className="w-day">Wed,</p>
                    <img 
                    src={Shower}
                    alt=""
                    className="icon-box"
                    />
                    <p className="degrees-1">
                        16°C 
                    </p>
                    <p className="degrees-2">
                        11°C
                    </p>
                </div>
        </div>
    )
}

export default TimeWeek
