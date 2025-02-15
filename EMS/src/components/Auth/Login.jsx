import React, { useState } from "react";

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Welcome Back 👋
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-72 text-white outline-none bg-gray-700 border border-gray-600 text-lg py-3 px-5 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-72 text-white outline-none bg-gray-700 border border-gray-600 text-lg py-3 px-5 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
            type="password"
            placeholder="Password"
          />
          <button className="w-72 bg-emerald-600 text-white text-lg py-3 rounded-full mt-3 transition-all hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-400">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
