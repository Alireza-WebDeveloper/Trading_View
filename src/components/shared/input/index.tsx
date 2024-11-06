import React from 'react';

interface Props {
  handleChange(value: string): void;
  value: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({
  handleChange,
  type,
  placeholder,
  value,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="border-2 text-black w-full placeholder:text-black rounded p-3"
      {...rest}
    />
  );
};

export default Input;
