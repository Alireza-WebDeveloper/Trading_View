import React from 'react';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import RankBadge from './rank-badge';
import TitleSection from './title-section';
import PriceSection from './price-section';
import SmallPriceSection from './small-price-section';
import { useCryptoPrice } from '../../../../lib/hooks/crypto-price';

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
  smallPrice = 'Ƀ1',
  smallPercentageChange = '▲ 0%',
}) => {
  const cryptoPrice = useCryptoPrice(symbol, price);

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
        ).toFixed(2)}`}
        smallPercentageChange={cryptoPrice.percentageChange}
      />
    </div>
  );
};

export default BitcoinPriceCard;
