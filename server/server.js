import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connect.js";
import router from "./router/route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/api", router);

connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });