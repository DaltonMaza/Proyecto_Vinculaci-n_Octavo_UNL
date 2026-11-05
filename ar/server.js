const express = require("express");

const app = express();
const PORT = 3000;

// Servir archivos de la carpeta public
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});