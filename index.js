const express = require('express');
const app = express();
const PORT = 3333;


app.get('/', (req, res) => {
    res.status(200).send("Welcome to My Node-JS Server!");
});

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});