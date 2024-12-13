import useViewModel from "./viewModel";
const Login = () => {
  const {
    username,
    password,
    error,
    handleOnSubmitLogin,
    handlePasswordOnChange,
    handleUsernameOnChange,
  } = useViewModel();
  return (
    <div className="bg-white mx-auto mt-10 w-fit h-fit p-5 rounded-2xl shadow-lg">
      <h1 className="mb-2">THE DRESS</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(), handleOnSubmitLogin({ username, password });
        }}
      >
        <div className="mb-3 flex flex-col gap-2">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => handleUsernameOnChange(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handlePasswordOnChange(e.target.value)}
              value={password}
            />
          </div>
          <div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </div>

        <div>
          <button className="primary-button" type="submit">
            Login
          </button>
        </div>
      </form>
      {/* <p className="text-xs w-3/4 mt-2 italic">
        Don't have an account? <span className="text-indigo-700">Register</span>
      </p> */}
    </div>
  );
};
export default Login;
