import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { user } from "../../utils";
import Home from "../pages/Home";

const Login = () => {
    const navigate = useNavigate();
  const [username, setUserName] = useAtom(user);
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    username == 'ptkp' ? navigate('/dashboard/ptkp') : navigate('/blog')
  }


  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <div className="bg-white w-[40vw] h-[40vh] rounded-3xl flex flex-col justify-center items-center">
        <p className="text-2xl font-bold my-10">Welcome Back</p>
        <div className="flex flex-col w-80">
          <label for="text" className="text-sm text-gray-500">
            Username
          </label>
          <input
            type="text"
            placeholder="ptkp"
            className="input input-bordered"
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-80 mt-2">
          <label for="password" className="text-sm text-gray-500">
            Password
          </label>
          <input
            type="password"
            placeholder="ptkp123"
            className="input input-bordered"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button onClick={loginHandle} className="btn btn-wide my-10">Login</button>
      </div>
    </div>
  );
};

export default Login;
