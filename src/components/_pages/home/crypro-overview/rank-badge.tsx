import React from 'react';

interface RankBadgeProps {
  rank: string;
}

const RankBadge: React.FC<RankBadgeProps> = ({ rank }) => (
  <button className="bg-yellow-300 text-black text-sm font-semibold px-1  py-0.5 rounded-md inline-block mb-2">
    {rank}
  </button>
);

export default RankBadge;
