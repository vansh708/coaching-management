import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    console.log("LOGIN RESPONSE:", res.data); // 👈 ADD THIS

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.student.role);

    navigate("/dashboard");
  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Glorious Institute
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-3 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p
            onClick={() => navigate("/register")}
            className="text-blue-500 cursor-pointer mt-3 text-center"
            >
            New user? Register here
        </p>


      </div>
    </div>
  );
}

export default Login;
