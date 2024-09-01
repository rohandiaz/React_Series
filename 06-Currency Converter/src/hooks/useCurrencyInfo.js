import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const res = await response.json();
        setData(res); // Store the entire response to inspect the data structure
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
