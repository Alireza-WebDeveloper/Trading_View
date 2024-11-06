import { create } from 'zustand';

export const cryptoSymbols = [
  { label: 'Bitcoin (BTC)', value: 'BINANCE:BTCUSDT' },
  { label: 'Ethereum (ETH)', value: 'BINANCE:ETHUSDT' },
  { label: 'Binance Coin (BNB)', value: 'BINANCE:BNBUSD' },
  { label: 'Cardano (ADA)', value: 'BINANCE:ADAUSDT' },
];

interface CryptoStore {
  symbol: string;
  setSymbol: (symbol: string) => void;
  dateRangeTab: '1d' | '1w' | '1m' | '3m' | '1y';
  activeTab: 'Price' | 'TradingView';
  setActiveTab: (tab: 'Price' | 'TradingView') => void;
  setDateRangeTab: (tab: '1d' | '1w' | '1m' | '3m' | '1y') => void;
  cryptoUnit: 'USD' | 'ETH';
  setCryptoUnit: (tab: 'USD' | 'ETH') => void;
}

const useCryptoStore = create<CryptoStore>((set) => ({
  symbol: 'BINANCE:BTCUSDT',
  setSymbol: (symbol) => set({ symbol }),
  activeTab: 'Price',
  setActiveTab: (tab) => set({ activeTab: tab }),
  dateRangeTab: '1d',
  setDateRangeTab: (tab) => set({ dateRangeTab: tab }),
  cryptoUnit: 'USD',
  setCryptoUnit: (tab) => set({ cryptoUnit: tab }),
}));

export { useCryptoStore };
