import { useState } from "react";
import { useLogin } from "../HOOKS/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string | any>("");
  const { login, error, isloading } = useLogin();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button disabled={isloading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
