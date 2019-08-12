const express = require('express');
const app = express();

app.get('/*', (req, res, next) => {
	res.json("Hello, I'm server!");
})

app.listen(5000, () => console.log("Server is listening on port 5000"));