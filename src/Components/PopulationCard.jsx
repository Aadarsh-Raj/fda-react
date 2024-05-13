import React from "react";
import "./Style/populationcard.css"
const PopulationCard = (props) => {
  return (
    <>
      <div className="population-card">
        <h3>{props.Year}</h3>
        <div className="country-details">
          <div className="country-name">{props.Nation}</div>
          <div className="country-popul">{props.Population}</div>
        </div>
      </div>
    </>
  );
};

export default PopulationCard;
