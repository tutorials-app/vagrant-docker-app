const express = require('express');
const app = express();

app.get('/*', (req, res, next) => {
	res.send("Hello, I'm client!");
})

app.listen(3000, () => console.log("Server is listening on port 3000"));