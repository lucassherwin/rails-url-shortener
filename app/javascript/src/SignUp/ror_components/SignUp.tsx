import React, { useEffect, useState } from "react";
import FormCard from "../../design-system/FormCard";
import FormInput from "../../design-system/FormInput";
import Icon from "../../design-system/Icon";
import RedirectPrompt from "../../design-system/RedirectPrompt";
import SubmitButton from "../../design-system/SubmitButton";

interface SignUpProps {
  signUpPath: string;
  csrfToken: string;
  createAlert: string | null;
  userData?: any; // TODO any for now
}

const SignUp: React.FC<SignUpProps> = ({
  signUpPath,
  csrfToken,
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

  useEffect(() => {
    if (userData) {
      setFirstName(userData.first_name || "");
      setLastName(userData.last_name || "");
      setUsername(userData.username || "");
      setEmail(userData.email_address || "");
    }
  }, [userData]);

  return (
    <FormCard
      action={signUpPath}
      csrfToken={csrfToken}
      title="Sign up"
      subtitle="Please sign up to continue"
    >
      <FormInput
        icon={<Icon name="person" size={16} className="text-white/60" />}
        type="text"
        name="user[first_name]"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
        required
        spacing="mt-6"
      />

      <FormInput
        icon={<Icon name="person" size={16} className="text-white/60" />}
        type="text"
        name="user[last_name]"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
        required
      />

      <FormInput
        icon={<Icon name="person" size={16} className="text-white/60" />}
        type="text"
        name="user[username]"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        required
      />

      <FormInput
        icon={<Icon name="email" size={14} className="text-white/75" />}
        type="email"
        name="user[email_address]"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        required
      />

      <FormInput
        icon={<Icon name="password" size={14} className="text-white/75" />}
        type="password"
        name="user[password]"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        required
      />

      <div className="mt-4 text-left">
        <button className="text-sm text-indigo-400 hover:underline">
          Forget password?
        </button>
      </div>

      <SubmitButton label="Sign up" />

      <RedirectPrompt
        prompt="Already have an account?"
        linkText="click here"
        onClick={() => { window.location.href = "/session/new"; }}
      />
    </FormCard>
  );
};

export default SignUp;
