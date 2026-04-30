import React, { useEffect, useState } from "react";

interface SessionFormProps {
  signInPath: string;
  newPasswordPath: string;
  csrfToken: string;
  alertMessage: string | null;
}

const SessionForm: React.FC<SessionFormProps> = ({
  signInPath,
  newPasswordPath,
  csrfToken,
  alertMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "user[email_address]":
        setEmail(value);
        break;
      case "user[password]":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSignUpRedirect = () => {
    window.location.href = "/sign_up/new";
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action={signInPath}
        method="post"
        className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8"
      >
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        <h1 className="text-white text-3xl mt-10 font-medium">Login</h1>

        {alertMessage && (
          <div className="mt-4 p-3 bg-red-500/10 text-red-400 rounded">
            {alertMessage}
          </div>
        )}

        <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

        <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />{" "}
            <rect x="2" y="4" width="20" height="16" rx="2" />{" "}
          </svg>
          <input
            type="email"
            name="user[email_address]"
            placeholder="Email"
            className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none "
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />{" "}
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />{" "}
          </svg>
          <input
            type="password"
            name="user[password]"
            placeholder="Password"
            className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left">
          <button className="text-sm text-indigo-400 hover:underline cursor-pointer">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition cursor-pointer"
        >
          Login
        </button>

        <p
          className="text-gray-400 text-sm mt-3 mb-11"
        >
          Don't have an account?
          <span className="text-indigo-400 hover:underline ml-1 cursor-pointer" onClick={handleSignUpRedirect}>
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default SessionForm;

// form design from https://prebuiltui.com/components/login-form
