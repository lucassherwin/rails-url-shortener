import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

interface InputButtonProps {
  onClick?: () => void;
  variant?: "default" | "secondary" | "ghost";
  label: string;
  className?: string;
  disabled?: boolean;
}

interface FormInputProps {
  icon?: React.ReactNode;
  iconAlign?: "inline-start" | "inline-end";
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  button?: InputButtonProps;
  required?: boolean;
  spacing?: string;
  disabled?: boolean;
}

const Input: React.FC<FormInputProps> = ({
  icon,
  iconAlign,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  button,
  required,
  spacing = "mt-4",
  disabled,
}) => {
  return (
    <InputGroup
      className={`bg-white/5 border-0 ring-2 ring-white/10 h-12 rounded-full overflow-hidden transition-all
        has-[[data-slot=input-group-control]:focus-visible]:border-transparent has-[[data-slot=input-group-control]:focus-visible]:ring-2
        has-[[data-slot=input-group-control]:focus-visible]:ring-indigo-500/60 ${spacing}`}
    >
      {icon && (
        <InputGroupAddon align={iconAlign} className="pl-4">
          {icon}
        </InputGroupAddon>
      )}

      <InputGroupInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="text-white placeholder-white/60"
      />

      {button && (
        <InputGroupAddon align="inline-end" className="pr-4">
          <InputGroupButton
            onClick={button.onClick}
            variant={button.variant}
            disabled={button.disabled}
            className={cn(
              button.className,
              button.disabled && "cursor-not-allowed",
            )}
          >
            {button.label}
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
};

export default Input;
