import express from "express";
import connectDB from "./config/connectdb";
import router from "./routes/";
const app = express();

//không cần dùng body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use("/api/v1", router);
connectDB();

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${3000}`);
});
