import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

interface SessionProps {
  submitPath: string;
}

const Session: React.FC<SessionProps> = ({ submitPath }) => {
  const [showNewAccount, setShowNewAccount] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowNewAccount(!showNewAccount);
  };

  return (
    <div>
      <h1>{showNewAccount ? "Create Account" : "Sign In"}</h1>
      <div>
        {showNewAccount ? (
          <SignUpForm submitPath={submitPath} />
        ) : (
          <SignInForm submitPath={submitPath} />
        )}
      </div>
      <a
        href="#"
        onClick={handleToggle}
      >
        {showNewAccount
          ? "Already have an account? Sign in"
          : "Don't have an account? Create one"}
      </a>
    </div>
  );
};

export default Session;
