const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.listen(5000, () => {
    console.log(`Server is listening in http://localhost:5000`);
})