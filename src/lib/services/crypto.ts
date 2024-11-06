// lib/services/crypto.ts
import axios from 'axios';

const fetchCryptoPrice = async (symbol: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`
    );
    const price = response.data[symbol.toLowerCase()]?.usd || 0;
    // فرض کنید تغییرات درصدی را محاسبه کنید یا از API دیگری بگیرید
    const percentageChange = '▲ 6.64%'; // این مقدار باید از یک API دریافت شود

    return { price: `$${price.toLocaleString()}`, percentageChange };
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    return { price: '$0', percentageChange: '▲ 0%' };
  }
};

export default fetchCryptoPrice;
