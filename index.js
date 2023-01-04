const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is ROOT");
});

app.get("/thing", (req, res) => {
    res.sendFile(__dirname + "/thing.html");
});

app.listen(port, () => {
    console.log("Express server is running");
});
