import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";

dotenv.config({
  filepath: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT , () => {
      console.log(`server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });

