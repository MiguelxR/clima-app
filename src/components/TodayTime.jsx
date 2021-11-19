import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todaytime.css";
import Shower from "../img/Shower.png";
import ApiFetch from "./ApiFetch";




const TodayTime = () => {
    

    return (
        <div className="t-time">
            <img
            src={Shower}
            alt=""
            className="t-icon-time"
            />
            <p className="number">
                <ApiFetch/>
                15
                <div className="degrees">
                °C
                </div>
            </p>
            <h3 className="t-time-desc">
                Shower
            </h3>
            <p className="date-1">
                Today
            </p>
            <div className="separator">
                .
            </div>
            <p className="date-2">
                Fri, 5 Jun
            </p>
            <p className="location">
                Helsinki
            </p>
        </div>
    )
}

export default TodayTime
