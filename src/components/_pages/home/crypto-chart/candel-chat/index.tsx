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
          symbol: symbol, // نماد انتخابی
          interval: '60', // بازه زمانی 1 ساعت
          theme: 'dark', // تم تاریک
          style: '1', // نوع نمودار (کندل)
          locale: 'en', // زبان
          toolbar_bg: '#000000', // رنگ پس‌زمینه نوار ابزار
          allow_symbol_change: true, // اجازه تغییر نماد
          hide_top_toolbar: false, // نمایش نوار ابزار بالای نمودار
          withdateranges: true, // اجازه انتخاب تاریخ
          height: '100%', // ارتفاع نمودار
          width: '100%', // عرض نمودار
        }}
        widgetPropsAny={{
          autosize: true, // اندازه خودکار نمودار
        }}
      />
    </div>
  );
};

export default CandleChart;
