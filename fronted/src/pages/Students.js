import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:5000/api/admin/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudents(res.data);
  };
  const deleteStudent = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/admin/delete-student/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Deleted ✅");

    fetchStudents(); // refresh list
  } catch (error) {
    console.log(error.response?.data);
  }
};


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Students List</h2>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Course</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        


        <tbody>
          {students.map((s) => (
            <tr key={s._id} className="text-center border-t">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.course}</td>
              <td className="p-2">
                <button
                    onClick={() => deleteStudent(s._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
                </td>

            </tr>
          ))}
          

        </tbody>
        

      </table>
    </div>
  );
}

export default Students;
