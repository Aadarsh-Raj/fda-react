import React, { useState } from "react";
import "./Style/crypto.css"
const CryptoContainer = () => {
  const cryptoObject = {
    time: {
      updated: "May 13, 2024 13:19:49 UTC",
      updatedISO: "2024-05-13T13:19:49+00:00",
      updateduk: "May 13, 2024 at 14:19 BST",
    },
    disclaimer:
      "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    chartName: "Bitcoin",
    bpi: {
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "62,877.013",
        description: "United States Dollar",
        rate_float: 62877.0134,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "50,116.941",
        description: "British Pound Sterling",
        rate_float: 50116.9409,
      },
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "58,276.742",
        description: "Euro",
        rate_float: 58276.7424,
      },
    },
  };
  const [cryptoData, setCryptoData] = useState(cryptoObject);
  return (
    <>
      <div className="crypto-container">
        <div className="crypto-inner-container">
        <div className="crypto-name"><h2>{cryptoData.chartName}</h2></div>
        <div className="crypto-details">
          <div className="crypto-price">
            <div className="currency">
              <h5>{cryptoData.bpi.USD.code}</h5>
              <p>{cryptoData.bpi.USD.rate}</p>
            </div>
            <div className="currency">
              <h5>{cryptoData.bpi.EUR.code}</h5>
              <p>{cryptoData.bpi.EUR.rate}</p>
            </div>
          </div>
          <div className="crypto-description">{cryptoData.disclaimer}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CryptoContainer;
