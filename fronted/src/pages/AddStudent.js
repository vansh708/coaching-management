import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const role = localStorage.getItem("role");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/admin/add-student",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Student Added ✅");
      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data);
      alert("Error adding student ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          Add Student
        </h2>

        <input name="name" placeholder="Name"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />

        <input name="email" placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />

        <input name="password" placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />

        <input name="course" placeholder="Course"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Student
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
