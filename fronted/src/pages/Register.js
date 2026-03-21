import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
 const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleRegister = async () => {
  try {
    await axios.post("http://localhost:5000/api/auth/register", form);

    alert("Registered Successfully ✅");

    navigate("/"); // 👈 login page pe bhej
  } catch (error) {
    alert(error.response?.data?.msg || "Error ❌");
  }
};


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          Student Register
        </h2>

        <input name="name" placeholder="Name"
          className="w-full p-2 mb-2 border"
          onChange={handleChange}
        />

        <input name="email" placeholder="Email"
          className="w-full p-2 mb-2 border"
          onChange={handleChange}
        />

        <input name="password" placeholder="Password"
          className="w-full p-2 mb-2 border"
          onChange={handleChange}
        />

        <input name="course" placeholder="Course"
          className="w-full p-2 mb-3 border"
          onChange={handleChange}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
        <p
            onClick={() => navigate("/")}
            className="text-blue-500 cursor-pointer mt-3 text-center"
            >
            Already have an account? Login
        </p>

      </div>
    </div>
  );
}

export default Register;
