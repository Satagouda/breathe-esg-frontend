import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import api from "../api/axios";


export default function LoginPage() {

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    try {

      const response = await api.post(
        "/token/",
        data
      );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid credentials");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >

        <h1 className="text-2xl font-bold mb-6">
          Breathe ESG
        </h1>

        <input
          {...register("username")}
          placeholder="Username"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  );
}