
import express from "express";
//import path from "path";

const app = express();

app.use(express.static("todo"))

app.get("/",(req,res) => {
    res.redirect("index.html");
})

app.listen(3001);
