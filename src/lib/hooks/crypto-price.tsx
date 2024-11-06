import { useEffect, useState } from 'react';

interface CryptoPrice {
  price: string;
  percentageChange: string;
}

export const useCryptoPrice = (symbol: string, initialPrice: string) => {
  const [cryptoPrice, setCryptoPrice] = useState<CryptoPrice>({
    price: initialPrice,
    percentageChange: '▲ 0%',
  });

  const [previousPrice, setPreviousPrice] = useState<number | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.p).toFixed(2);

      if (previousPrice !== null) {
        const change =
          ((parseFloat(newPrice) - previousPrice) / previousPrice) * 100;
        const formattedChange = change.toFixed(2);
        const changeSymbol = change > 0 ? '▲' : '▼';

        setCryptoPrice({
          price: `$${newPrice}`,
          percentageChange: `${changeSymbol} ${Math.abs(
            parseFloat(formattedChange)
          )}%`,
        });
      }

      setPreviousPrice(parseFloat(newPrice));
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    return () => {
      socket.close();
    };
  }, [symbol, previousPrice]);

  return cryptoPrice;
};
