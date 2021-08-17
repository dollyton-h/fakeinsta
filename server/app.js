const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || '5000'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "*",
    })
);

const userRoutes = require("./routes/userRoutes");

app.use(
  "/api/fakeInsta",
  userRoutes,
);

app.get("/", (req, res) => {
    res.send({
      status_code: 200,
      status_message: "Success",
      message: "Welcome to fake-insta API",
    });
  });
  
  app.all("*", (req, res) =>
    res.status(404).json({
      statusText: "Not Found",
      message: "Route doesn't exist, please check youre Route again.",
    })
  );

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  })
  