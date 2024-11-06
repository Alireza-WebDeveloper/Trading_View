import { useCryptoStore } from '../../../../../../lib/store/crypto';
import TabButton from '../../../../../shared/tab-button';
const DateRangeTab = () => {
  const { dateRangeTab, setDateRangeTab } = useCryptoStore();
  return (
    <section className="flex items-center gap-2">
      <TabButton
        label="1h"
        isActive={dateRangeTab === '1h'}
        onClick={() => setDateRangeTab('1h')}
      />
      <TabButton
        label="24h"
        isActive={dateRangeTab === '24h'}
        onClick={() => setDateRangeTab('24h')}
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
        label="6m"
        isActive={dateRangeTab === '6m'}
        onClick={() => setDateRangeTab('6m')}
      />
      <TabButton
        label="1y"
        isActive={dateRangeTab === '1y'}
        onClick={() => setDateRangeTab('1y')}
      />
      <TabButton
        label="all"
        isActive={dateRangeTab === 'all'}
        onClick={() => setDateRangeTab('all')}
      />
    </section>
  );
};

export default DateRangeTab;
