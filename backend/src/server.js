import  "dotenv/config";
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";
import { config } from "./config/env.js";
import { connectToDatabase } from "./config/db.js";
import skillRoutes from "./routes/skillRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
    try {
        console.log("process.env.DB_HOST =", process.env.DB_HOST);
        console.log("config.DB_HOST =", config.DB_HOST);
        // await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
})();


app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.json({message: "SkillSync API is running", version: "1.0.0"});
});

app.use("/health", healthRoutes);
app.use("/skill", skillRoutes)

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });