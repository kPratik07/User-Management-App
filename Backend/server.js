const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
