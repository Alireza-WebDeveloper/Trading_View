export interface CryptoPriceResponse {
  [key: string]: {
    usd: number;
  };
}

export interface CryptoPriceData {
  price: string;
  percentageChange: string;
}

export interface PriceData {
  timestamp: string;
  price: number;
}

export interface CryptoMarketChartResponse {
  prices: [number, number][];
}
