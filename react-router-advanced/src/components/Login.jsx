import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };
  return (
    <>
      <div>login Page</div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
