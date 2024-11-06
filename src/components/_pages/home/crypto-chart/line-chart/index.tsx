import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './chart';
import Header from './header';
import { useCryptoStore } from '../../../../../lib/store/crypto';
import { formatTimestamp } from '../../../../../lib/utils/format-time';

const LineChart = () => {
  const { dateRangeTab, cryptoUnit } = useCryptoStore();
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

    fetchCryptoData(cryptoUnit.toLowerCase(), days);
  }, [dateRangeTab, cryptoUnit]);

  return (
    <section className="bg-gray-900 p-2 h-full rounded">
      <Header />
      <Chart cryptoData={cryptoData} timeRange={dateRangeTab} />
    </section>
  );
};

export default LineChart;
