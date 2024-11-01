import express from "express";
import router from "./data/routes.js";

const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
