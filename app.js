const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.status(200).json({
		message: "¡Hola mundo!",
	});
});
app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
