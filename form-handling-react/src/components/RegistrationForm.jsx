import { useState } from "react";

const RegisterationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState(false);

  const fromHandler = (e) => {
    e.preventDefault();
    // if (!email), if (!password)
    if (!username.trim() || !email.trim() || !password.trim()) {
      setErrors(true);
      return;
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors(false);
  };
  return (
    <div className="h-screen  flex justify-center items-center">
      <form onSubmit={fromHandler} className="shadow-lg p-12">
        {error && (
          <p className="text-sm text-red-500">Please Enter full form!</p>
        )}
        <div>
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="border-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterationForm;
