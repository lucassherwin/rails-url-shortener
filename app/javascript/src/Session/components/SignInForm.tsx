import React, { useState } from "react";

interface SignInProps {
  submitPath: string;
}

const SignInForm: React.FC<SignInProps> = ({ submitPath }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form action={submitPath} method="post">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
