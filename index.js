const express = require("express");
const app = express();

const PORT = 4800;

app.get("/", (req, res) => {
  res.json({ message: "It`s working" });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
