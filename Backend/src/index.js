import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";

dotenv.config({
  filepath: "./.env",
});

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });


  