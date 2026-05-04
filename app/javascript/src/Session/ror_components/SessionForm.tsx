import React, { useState } from "react";
import Alert from "../../design-system/Alert";
import FormCard from "../../design-system/FormCard";
import Input from "../../design-system/Input";
import Icon from "../../design-system/Icon";
import TextLink from "../../design-system/TextLink";
import SubmitButton from "../../design-system/Button";

interface SessionFormProps {
  signInPath: string;
  newPasswordPath: string;
  csrfToken: string;
  alertMessage: string | null;
}

const SessionForm: React.FC<SessionFormProps> = ({
  signInPath,
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

  return (
    <FormCard
      action={signInPath}
      csrfToken={csrfToken}
      title="Login"
      subtitle="Please sign in to continue"
    >
      {alertMessage && <Alert description={alertMessage} type='error' className='mt-2' />}

      <Input
        icon={<Icon name="email" size={14} className="text-white/75" />}
        type="email"
        name="user[email_address]"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        required
      />

      <Input
        icon={<Icon name="password" size={14} className="text-white/75" />}
        type="password"
        name="user[password]"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        required
      />

      <div className="mt-4 text-left">
        <button className="text-sm text-indigo-400 hover:underline cursor-pointer">
          Forget password?
        </button>
      </div>

      <SubmitButton label="Login" />

      <TextLink
        prompt="Don't have an account?"
        linkText="Click here"
        onClick={() => {
          window.location.href = "/sign_up/new";
        }}
      />
    </FormCard>
  );
};

export default SessionForm;

// form design from https://prebuiltui.com/components/login-form
