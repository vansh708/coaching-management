const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");


dotenv.config();
connectDB();



const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);
app.get("/",(req,res)=>{
    res.send("glorius institute");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server runnign on PORt:${PORT}`);
});
