import React from 'react';

interface PriceSectionProps {
  price: string;
  percentageChange: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({
  price,
  percentageChange,
}) => {
  const isNegative = percentageChange.startsWith('▼');

  return (
    <section className="flex items-center gap-4">
      <div className="text-3xl font-bold mb-1">{price}</div>
      <div className="flex items-center">
        <span
          className={`text-sm px-2 py-0.5 rounded-md font-semibold ${
            isNegative
              ? 'bg-red-700 text-red-400'
              : 'bg-green-700 text-green-400'
          }`}
        >
          {percentageChange}
        </span>
      </div>
    </section>
  );
};

export default PriceSection;
