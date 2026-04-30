import React from "react";

interface RedirectPromptProps {
  prompt: string;
  linkText: string;
  onClick: () => void;
}

const RedirectPrompt: React.FC<RedirectPromptProps> = ({
  prompt,
  linkText,
  onClick,
}) => {
  return (
    <p className="text-gray-400 text-sm mt-3 mb-11">
      {prompt}
      <span
        className="text-indigo-400 hover:underline ml-1 cursor-pointer"
        onClick={onClick}
      >
        {linkText}
      </span>
    </p>
  );
};

export default RedirectPrompt;
