import React, { useEffect, useState } from "react";
import PopulationCard from "./PopulationCard";
import "./Style/populationcontainer.css";
const PopulationDataContainer = () => {
  const [populationData, setPopulationData] = useState([]);
  useEffect(() => {
    fetchPopulation();
  }, []);
  const fetchPopulation = async () => {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const data = await response.json();
      setPopulationData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="population-container">
        {populationData.map((ele) => (
          <PopulationCard
            Nation={ele.Nation}
            Population={ele.Population}
            Year={ele.Year}
          />
        ))}
      </div>
    </>
  );
};

export default PopulationDataContainer;
