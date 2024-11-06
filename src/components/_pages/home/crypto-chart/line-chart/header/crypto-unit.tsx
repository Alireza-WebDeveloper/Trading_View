import { useCryptoStore } from '../../../../../../lib/store/crypto';
import { CheckBox } from '../../../../../shared/checkbox';

const CryptoUnit = () => {
  const { cryptoUnit, setCryptoUnit } = useCryptoStore();
  return (
    <div className="flex items-center gap-4">
      <CheckBox
        label="USD"
        select={cryptoUnit}
        item="USD"
        onClick={() => setCryptoUnit('USD')}
      />
      <CheckBox
        label="ETH"
        select={cryptoUnit}
        item="ETH"
        onClick={() => setCryptoUnit('ETH')}
      />
    </div>
  );
};

export default CryptoUnit;
