import React, { useState } from 'react';

const Input = ({ label, type = 'text', id, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full mt-4">
      {label && (
        <label 
          htmlFor={id} 
          className={`text-sm font-medium transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className="bg-surface-highest text-on-surface border-b-[1px] border-outline-variant px-4 py-3 outline-none focus:border-primary focus:shadow-[0_4px_10px_-4px_rgba(242,202,80,0.2)] transition-all duration-300 placeholder:text-outline-variant rounded-t"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};

export default Input;
