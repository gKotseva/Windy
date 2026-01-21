import { useState } from "react";

import { WiRaindrop } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiFog } from "react-icons/wi";

export const AirConditions = () => {
  const [isMore, setIsMore] = useState(false);
  return (
    <div className="field flex flex-col gap-10 w-160">
      <div className="flex justify-between">
        <h1 className="uppercase">Air Conditions</h1>
        <button className="button" onClick={() => setIsMore(!isMore)}>
          {isMore ? "See less" : "See more"}
        </button>
      </div>
      <div className="flex flex-wrap gap-y-10 gap-x-0">
        <div className="w-1/2">
          <div className="flex gap-2">
            <WiThermometer className="text-3xl" />
            <h3>Feels like</h3>
          </div>
          <p className="text-2xl text-white ">30&#176;</p>
        </div>
        <div className="w-1/2">
          <div className="flex gap-2">
            <WiStrongWind className="text-3xl" />
            <h3>Wind</h3>
          </div>
          <p className="text-2xl text-white ">0.2 km/h</p>
        </div>
        <div className="w-1/2">
          <div className="flex gap-2">
            <WiRaindrop className="text-3xl" />
            <h3>Chance of rain</h3>
          </div>
          <p className="text-2xl text-white ">23%</p>
        </div>
        <div className="w-1/2">
          <div className="flex gap-2">
            <WiHumidity className="text-3xl" />
            <h3>Humidity</h3>
          </div>
          <p className="text-2xl text-white ">50</p>
        </div>
        {isMore && (
          <>
            <div className="w-1/2">
              <div className="flex gap-2">
                <WiBarometer className="text-3xl" />
                <h3>Pressure</h3>
              </div>
              <p className="text-2xl text-white ">50</p>
            </div>
            <div className="w-1/2">
              <div className="flex gap-2">
                <WiFog className="text-3xl" />
                <h3>Visibility</h3>
              </div>
              <p className="text-2xl text-white ">50</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
