import React, { useState } from "react";
import calculateMap from "../map";

import "./index.scss";

const CalculateEntrance = () => {
  const [sumShow, setSumShow] = useState('0');

  return (
    <div className="calculate-wrap">
      <div className="sum-show">{sumShow}</div>

      {calculateMap.map((item) => {
        const { name, code, type } = item || {};
        return (
          <div 
          className={`calculate-content ${code === "0" ? "row2" : ""}`}
            onClick={()=> {
                setSumShow(code);
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default CalculateEntrance;
