import CryptoOverview from '../../components/_pages/home/crypro-overview';
import CryptoChart from '../../components/_pages/home/crypto-chart';
import CryptoTab from '../../components/_pages/home/crypto-tab';

const Page = () => {
  return (
    <section className="flex flex-col gap-3">
      <CryptoOverview />
      <CryptoTab title={'bitcoin price chart (BTC)'} />
      <CryptoChart />
    </section>
  );
};

export default Page;
