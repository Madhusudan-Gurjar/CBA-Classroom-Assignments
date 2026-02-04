function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h2>
    </div>
  );
}

export default LoginStatus;
