import React from "react";

interface FormCardProps {
  action: string;
  csrfToken: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({
  action,
  csrfToken,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action={action}
        method="post"
        className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8"
      >
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        <h1 className="text-white text-3xl mt-10 font-medium">{title}</h1>
        {subtitle && (
          <p className="text-gray-400 text-sm mt-2">{subtitle}</p>
        )}
        {children}
      </form>
    </div>
  );
};

export default FormCard;
