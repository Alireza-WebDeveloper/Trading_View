import { AdvancedChart } from 'react-tradingview-embed';
import { cryptoSymbols, useCryptoStore } from '../../../../../lib/store/crypto';

const CandleChart = () => {
  const { symbol, setSymbol } = useCryptoStore();

  return (
    <div className="h-screen ">
      <div className="p-4">
        <select
          id="crypto-select"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="p-2 bg-gray-800 text-white rounded"
        >
          {cryptoSymbols.map((crypto) => (
            <option key={crypto.value} value={crypto.value}>
              {crypto.label}
            </option>
          ))}
        </select>
      </div>

      <AdvancedChart
        widgetProps={{
          symbol: symbol,
          interval: '60',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#000000',
          allow_symbol_change: true,
          hide_top_toolbar: false,
          withdateranges: true,
          height: '100%',
          width: '100%',
        }}
        widgetPropsAny={{
          autosize: true,
        }}
      />
    </div>
  );
};

export default CandleChart;
