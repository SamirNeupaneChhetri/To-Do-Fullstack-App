const express = require('express');

const app = express();

const PORT = 4500;

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Api...."})
}) 

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})