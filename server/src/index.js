import app from "./app.js";

app.listen(5000, () => {
  console.log("server is listening to the port ", process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Hhelloo pawar you are on server</h1>");
});
