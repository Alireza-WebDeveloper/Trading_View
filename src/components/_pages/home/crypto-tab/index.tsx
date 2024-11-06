import React from 'react';
import { useCryptoStore } from '../../../../lib/store/crypto';
import TabButton from '../../../shared/tab-button';

interface Props {
  title: string;
}

const CryptoTab: React.FC<Props> = ({ title }) => {
  const { activeTab, setActiveTab } = useCryptoStore();
  return (
    <section className="flex justify-between items-center w-[95%] mx-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <section className="flex items-center gap-4 bg-gray-900 p-3 rounded-xl">
        <TabButton
          label="price"
          isActive={activeTab === 'Price'}
          onClick={() => setActiveTab('Price')}
        />
        <TabButton
          label="tradingview"
          isActive={activeTab === 'TradingView'}
          onClick={() => setActiveTab('TradingView')}
        />
      </section>
    </section>
  );
};

export default CryptoTab;
