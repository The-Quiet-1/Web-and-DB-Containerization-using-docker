const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "password123",
  database: process.env.DB_NAME || "video_booking",
  port: 5432
});

// ---------------- API ROUTES ----------------

app.post("/api/book", async (req, res) => {
  const { name, email, packageType, details } = req.body;

  try {
    await pool.query(
      `INSERT INTO bookings (name, email, package, details)
       VALUES ($1, $2, $3, $4)`,
      [name, email, packageType, details]
    );

    res.json({ message: "Booking submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch bookings" });
  }
});

// ---------------------------------------------------

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

