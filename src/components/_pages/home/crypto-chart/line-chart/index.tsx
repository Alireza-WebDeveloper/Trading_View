import Chart from './chart';
import Header from './header';
import { useCryptoStore } from '../../../../../lib/store/crypto';
import useCryptoData from '../../../../../lib/hooks/crypto-data';

const LineChart = () => {
  const { dateRangeTab, cryptoUnit } = useCryptoStore();
  const cryptoData = useCryptoData(cryptoUnit, dateRangeTab);

  return (
    <section className="bg-gray-900 p-2 h-full rounded">
      <Header />
      <Chart cryptoData={cryptoData} timeRange={dateRangeTab} />
    </section>
  );
};

export default LineChart;
