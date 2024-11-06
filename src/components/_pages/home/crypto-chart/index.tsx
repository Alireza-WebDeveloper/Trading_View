import { useCryptoStore } from '../../../../lib/store/crypto';
import CandelChart from './candel-chat';

import LineChartComponent from './line-chart';

const CryptoChart = () => {
  const { activeTab } = useCryptoStore();
  return (
    <section className="h-[800px]">
      {activeTab === 'Price' && <LineChartComponent />}
      {activeTab === 'TradingView' && <CandelChart />}
    </section>
  );
};

export default CryptoChart;
