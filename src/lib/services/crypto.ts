import axios from 'axios';
import { formatTimestamp } from '../utils/format-time';
import {
  CryptoMarketChartResponse,
  CryptoPriceData,
  CryptoPriceResponse,
  PriceData,
} from './crypto.type';

export const fetchCryptoPrice = async (
  symbol: string
): Promise<CryptoPriceData> => {
  try {
    const response = await axios.get<CryptoPriceResponse>(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`
    );
    const price = response.data[symbol.toLowerCase()]?.usd || 0;

    const percentageChange = '▲ 6.64%';

    return { price: `$${price.toLocaleString()}`, percentageChange };
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    return { price: '$0', percentageChange: '▲ 0%' };
  }
};

export const fetchCryptoData = async (
  currency: string,
  days: number
): Promise<PriceData[]> => {
  const response = await axios.get<CryptoMarketChartResponse>(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}`
  );
  return response.data.prices.map(([timestamp, price]) => ({
    timestamp: formatTimestamp(timestamp),
    price,
  }));
};
