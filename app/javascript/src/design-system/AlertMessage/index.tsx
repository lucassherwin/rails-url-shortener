import React from "react";

interface AlertMessageProps {
  message: string | null;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-4 p-3 bg-red-500/10 text-red-400 rounded">
      {message}
    </div>
  );
};

export default AlertMessage;
