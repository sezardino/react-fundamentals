import { useState } from "react";
import { Button, Input } from "../components/ui";
import { useAuth } from "../context";

const Auth = () => {
  const { login: loginHandler } = useAuth();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    loginHandler();
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column", gap: 25 }}
      >
        <Input
          name="login"
          placeholder="login"
          value={login}
          onChange={(evt) => setLogin(evt.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Auth;
