import React, { useEffect, useState } from 'react';
import RankBadge from './rank-badge';
import TitleSection from './title-section';
import PriceSection from './price-section';
import SmallPriceSection from './small-price-section';
import { BsCurrencyBitcoin } from 'react-icons/bs';

interface BitcoinPriceCardProps {
  rank?: string;
  icon?: React.ReactNode;
  title?: string;
  symbol?: string;
  price?: string;
  percentageChange?: string;
  smallPrice?: string;
  smallPercentageChange?: string;
}

const BitcoinPriceCard: React.FC<BitcoinPriceCardProps> = ({
  rank = 'RANK #1',
  icon = <BsCurrencyBitcoin className="text-2xl text-white rotate-[20deg]" />,
  title = 'Bitcoin Price',
  symbol = 'btcusdt',
  price = '$73,452.42',
  percentageChange = '▲ 6.64%',
  smallPrice = 'Ƀ1', // مقدار اولیه برای Ƀ1
  smallPercentageChange = '▲ 0%',
}) => {
  const [cryptoPrice, setCryptoPrice] = useState({
    price: price,
    percentageChange: percentageChange,
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
        const formattedChange: any = change.toFixed(2);
        const changeSymbol = change > 0 ? '▲' : '▼';

        setCryptoPrice({
          price: `$${newPrice}`,
          percentageChange: `${changeSymbol} ${Math.abs(formattedChange)}%`,
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

  return (
    <div className="text-white p-4 flex flex-col gap-2 items-start rounded-lg w-72">
      <RankBadge rank={rank} />
      <TitleSection icon={icon} title={title} symbol={symbol} />
      <PriceSection
        price={cryptoPrice.price}
        percentageChange={cryptoPrice.percentageChange}
      />

      <SmallPriceSection
        smallPrice={`Ƀ${(
          parseFloat(cryptoPrice.price.replace('$', '')) / 1000
        ).toFixed(2)}`} // محاسبه قیمت کوچک
        smallPercentageChange={cryptoPrice.percentageChange}
      />
    </div>
  );
};

export default BitcoinPriceCard;
