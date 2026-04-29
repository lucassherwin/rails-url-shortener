import React, { useEffect, useState } from "react";

interface SignUpProps {
  signUpPath: string;
  csrfToken: string;
  createAlert: string | null;
  userData?: any; // TODO any for now
}

const SignUp: React.FC<SignUpProps> = ({
  signUpPath,
  csrfToken,
  createAlert,
  userData,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "user[first_name]":
        setFirstName(value);
        break;
      case "user[last_name]":
        setLastName(value);
        break;
      case "user[username]":
        setUsername(value);
        break;
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

  const handleLoginRedirect = () => {
    window.location.href = "/session/new";
  };

  useEffect(() => {
    if (userData) {
      setFirstName(userData.first_name || "");
      setLastName(userData.last_name || "");
      setUsername(userData.username || "");
      setEmail(userData.email_address || "");
    }
  }, [userData]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action={signUpPath}
        method="post"
        className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8"
      >
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        <h1 className="text-white text-3xl mt-10 font-medium">Sign up</h1>

        <p className="text-gray-400 text-sm mt-2">Please sign up to continue</p>
        <>
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="8" r="5" />{" "}
              <path d="M20 21a8 8 0 0 0-16 0" />{" "}
            </svg>
            <input
              type="text"
              name="user[first_name]"
              placeholder="First Name"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none "
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="8" r="5" />{" "}
              <path d="M20 21a8 8 0 0 0-16 0" />{" "}
            </svg>
            <input
              type="text"
              name="user[last_name]"
              placeholder="Last Name"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none "
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="8" r="5" />{" "}
              <path d="M20 21a8 8 0 0 0-16 0" />{" "}
            </svg>
            <input
              type="text"
              name="user[username]"
              placeholder="Username"
              className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none "
              value={username}
              onChange={handleChange}
              required
            />
          </div>
        </>

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
          <button className="text-sm text-indigo-400 hover:underline">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition "
        >
          Sign up
        </button>

        <p
          onClick={handleLoginRedirect}
          className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
        >
          Already have an account?
          <span className="text-indigo-400 hover:underline ml-1">
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
