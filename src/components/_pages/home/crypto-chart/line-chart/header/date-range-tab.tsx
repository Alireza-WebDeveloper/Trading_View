import { useCryptoStore } from '../../../../../../lib/store/crypto';
import TabButton from '../../../../../shared/tab-button';
const DateRangeTab = () => {
  const { dateRangeTab, setDateRangeTab } = useCryptoStore();
  return (
    <section className="flex items-center gap-2">
      <TabButton
        label="1d"
        isActive={dateRangeTab === '1d'}
        onClick={() => setDateRangeTab('1d')}
      />
      <TabButton
        label="1w"
        isActive={dateRangeTab === '1w'}
        onClick={() => setDateRangeTab('1w')}
      />
      <TabButton
        label="3m"
        isActive={dateRangeTab === '3m'}
        onClick={() => setDateRangeTab('3m')}
      />

      <TabButton
        label="1y"
        isActive={dateRangeTab === '1y'}
        onClick={() => setDateRangeTab('1y')}
      />
    </section>
  );
};

export default DateRangeTab;
