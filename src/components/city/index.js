import React from "react";
import { CityStyledWrapper } from "./style";

const City = (props) => {
  return (
    <CityStyledWrapper>
      <div className="add-city">
        <h3>{props.city_name}</h3>
        <i className="fa-solid fa-plus"></i>
      </div>
    </CityStyledWrapper>
  );
};

export default City;
