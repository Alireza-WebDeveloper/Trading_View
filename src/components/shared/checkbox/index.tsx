interface Props {
  select?: boolean | string;
  item: string | boolean;
  className?: string;
  onClick?: (item: string | boolean) => void;
  label?: string; // اضافه کردن پراپرتی برای عنوان
}

export const CheckBox = ({
  select,
  item,
  className,
  onClick,
  label,
}: Props) => {
  return (
    <div className="flex items-center">
      <div
        className={`flex cursor-pointer items-center justify-center w-5 h-5 rounded border-2 transition-colors ${className} ${
          select === item ? 'bg-orange-500' : 'bg-gray-800 border-gray-500'
        }`}
        onClick={() => onClick && onClick(item)}
      >
        <svg
          className="ease-in duration-200 pt-0.5"
          width="12px"
          height="12px"
          fill="none"
          strokeWidth="2px"
          stroke={select === item ? 'black' : 'var(--primary-900)'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16"
          strokeDashoffset={select === item ? 0 : '16'}
        >
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </div>
      {label && <span className="ml-2 text-white">{label}</span>}{' '}
    </div>
  );
};
