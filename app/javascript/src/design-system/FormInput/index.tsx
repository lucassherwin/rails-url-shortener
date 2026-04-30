import React from "react";

interface FormInputProps {
  icon: React.ReactNode;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  spacing?: string;
}

const BASE_CLASS =
  "flex items-center w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all";

const FormInput: React.FC<FormInputProps> = ({
  icon,
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  spacing = "mt-4",
}) => {
  return (
    <div className={`${BASE_CLASS} ${spacing}`}>
      {icon}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
