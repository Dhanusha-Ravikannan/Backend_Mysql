
import express from "express";
import cors from "cors";
import studentRoutes from './Routes/studentRoutes.js'

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
