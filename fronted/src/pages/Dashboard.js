import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
    >
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-800 to-purple-800 text-white p-6 shadow-2xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-10 tracking-wide">
            🎓 Glorious Institute
          </h2>

          <ul className="space-y-4">
            <li
              onClick={() => navigate("/dashboard")}
              className="cursor-pointer hover:bg-white/20 p-2 rounded-lg transition"
            >
              Dashboard
            </li>

            {role === "admin" && (
              <>
                <li
                  onClick={() => navigate("/students")}
                  className="cursor-pointer hover:bg-white/20 p-2 rounded-lg transition"
                >
                  Students
                </li>

                <li
                  onClick={() => navigate("/add-student")}
                  className="cursor-pointer hover:bg-white/20 p-2 rounded-lg transition"
                >
                  Add Student
                </li>
              </>
            )}
          </ul>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg mb-6"
        >
          <h1 className="text-2xl font-bold">Welcome to Dashboard 🎉</h1>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { title: "Total Students", value: "120" },
            { title: "Courses", value: "5" },
            { title: "Notes Uploaded", value: "25" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-6"
        >
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700">
            Welcome to Glorious Institute of Commerce. We provide quality
            education with experienced faculty, modern teaching techniques, and
            excellent student results.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4">Our Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1588072432836-e10032774350",
              "https://images.unsplash.com/photo-1577896851231-70ef18881754",
              "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                whileHover={{ scale: 1.1 }}
                className="rounded-xl shadow-md"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
