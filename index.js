const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //publicフォルダのhtmlファイルを読み込む

app.get("/", (req, res) => {
  res.send("<h1>トップページですか!!</h1>");
});

app.post("/api/v1/quiz", (req, res) => {
  const answer = req.body.answer;

  if (answer === "2") {
    // res.send(`<h1>正解！</h1>`);
    res.redirect("/correct.html");
  } else {
    // res.send(`<h1>不正解</h1>`);
    res.redirect("/wrong.html");
  }

  res.send(`<h1>${answer}</h1>`);
});

app.get("/api/v1/users", (req, res) => {
  res.send({
    name: "Mike",
    age: 30,
  });
});

app.listen(3000, () => {
  console.log("I am running!");
});
