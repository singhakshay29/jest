import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const handleReset = () => {
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }
    setError("");
    console.log("Login success");

    handleReset();
  };
  return (
    <div className='m-5'>
      <h3>Login Here</h3>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col m-5 gap-10 justify-center text-center'>
        <div className='flex gap-2 justify-between'>
          <h4 className='text-white'>Email</h4>
          <input
            className='bg-white w-2xl'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            type='email'
          />
        </div>
        <div className='flex gap-2 justify-between'>
          <h4 className='text-white'>Password</h4>
          <input
            className='bg-white w-2xl'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            type='password'
          />
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='flex justify-center gap-10'>
          <button className='bg-blue-400 rounded-2xl text-white p-3 cursor-pointer'>
            Submit{" "}
          </button>
          <button
            onClick={() => handleReset()}
            className='bg-gray-500 rounded-2xl cursor-pointer text-white p-3'>
            Reset{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
