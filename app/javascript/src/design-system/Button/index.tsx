import React from "react";
import { Button as UIBUtton } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, disabled }) => {
  return (
    <UIBUtton
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
    >
      {label}
    </UIBUtton>
  );
};

export default Button;
