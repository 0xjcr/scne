import express from "express";
import sequelize from "./models/index";
import cors from "cors";
const app = express();
import router from "./router/router";
import session from "express-session";

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/", router);
const server = (async () => {
  try {
    await sequelize.sync();
    console.log("Connected to the db at port 5432 🟦");
    // Start server
    const port = 3333;
    app.listen(port, () => {
      console.log(`Server listening on port ${port} 🟩`);
    });
  } catch (error) {
    console.error("NOT CONNECTED to the database:", error);
  }
})();

export default server;
