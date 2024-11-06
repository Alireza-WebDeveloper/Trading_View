import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatTimestamp } from '../utils/format-time';

const useCryptoData = (currency: string, dateRangeTab: string) => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);

  const fetchCryptoData = async (currency: string, days: number) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}`
      );
      setCryptoData(
        response.data.prices.map(([timestamp, price]: [number, number]) => {
          const formattedTimestamp = formatTimestamp(timestamp);
          return {
            timestamp: formattedTimestamp,
            price,
          };
        })
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    let days = 1;
    if (dateRangeTab === '1d') days = 1;
    else if (dateRangeTab === '1w') days = 7;
    else if (dateRangeTab === '1m') days = 30;
    else if (dateRangeTab === '3m') days = 90;
    else if (dateRangeTab === '1y') days = 365;

    fetchCryptoData(currency.toLowerCase(), days);

    //!! 1 )  ایجاد اتصال وب‌سوکت برای داده‌های بلادرنگ
    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${currency.toLowerCase()}@trade`
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.p).toFixed(2);
      const newTimestamp = formatTimestamp(Date.now());

      //!! 2 )  به‌روزرسانی قیمت در cryptoData
      setCryptoData((prevData) => [
        ...prevData,
        { timestamp: newTimestamp, price: parseFloat(newPrice) },
      ]);
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    return () => {
      socket.close();
    };
  }, [currency, dateRangeTab]);

  return cryptoData;
};

export default useCryptoData;
