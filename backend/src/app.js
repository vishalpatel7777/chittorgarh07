import express from "express";
import cors from "cors";
import ipoRoutes from "./routes/ipo.routes.js";

const app = express();

/**
 * ✅ CORS — allow frontend dev server
 */
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/ipos", ipoRoutes);

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

export default app;
