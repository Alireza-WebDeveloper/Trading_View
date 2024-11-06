import DateRangeTab from './date-range-tab';
import CryptoUnit from './crypto-unit';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <CryptoUnit />
      <DateRangeTab />
    </div>
  );
};

export default Header;
