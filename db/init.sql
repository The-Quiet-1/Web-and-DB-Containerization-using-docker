CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  package VARCHAR(50),
  details TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

