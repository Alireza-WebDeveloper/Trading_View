import React from 'react';

interface SmallPriceSectionProps {
  smallPrice: string;
  smallPercentageChange: string;
}

const SmallPriceSection: React.FC<SmallPriceSectionProps> = ({
  smallPrice,
  smallPercentageChange,
}) => {
  const isPositive = smallPercentageChange.includes('▲');

  return (
    <div className="flex items-center mt-2 text-gray-400">
      <span className="text-white ml-1">{smallPrice}</span>
      <span
        className={`${
          isPositive ? 'bg-green-800 text-green-400' : 'bg-red-800 text-red-400'
        } text-xs px-2 py-0.5 rounded-md font-semibold ml-2`}
      >
        {smallPercentageChange}
      </span>
    </div>
  );
};

export default SmallPriceSection;
