import React from "react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition cursor-pointer"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
