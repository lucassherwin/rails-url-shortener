import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

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

const Input: React.FC<FormInputProps> = ({
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
    <InputGroup
      className={`bg-white/5 border-0 ring-2 ring-white/10 h-12 rounded-full overflow-hidden transition-all
        has-[[data-slot=input-group-control]:focus-visible]:border-transparent has-[[data-slot=input-group-control]:focus-visible]:ring-2
        has-[[data-slot=input-group-control]:focus-visible]:ring-indigo-500/60 ${spacing}`}
    >
      <InputGroupAddon align="inline-start" className="pl-4">
        {icon}
      </InputGroupAddon>
      <InputGroupInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="text-white placeholder-white/60"
      />
    </InputGroup>
  );
};

export default Input;
