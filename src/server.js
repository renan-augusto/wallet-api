import express from 'express';

const app = express();

app.get("/hello-world", (req, res) => {
    res.send("Hello World!")
})

app.listen(5000, () => console.log("Server listening in port 5000"));

