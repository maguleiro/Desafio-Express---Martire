const express = require('express');
const Mensajes = require('./src/Mensajes.js')
const Prodcutos = require('./src/archivos/Productos.txt')

const app = express();
const msg = new Mensajes();

app.get('/', (req, res) => {
  res.send(msg.generarPlantillaMsg(1, 'red', 'Juan'));
});

try {
  fs.readFile('./archivos/Productos.txt', 'utf-8', (error, contenido) =>{
    if (error) {
      throw new Error(error);
    } else {
      const info = {
        contenidoObj: JSON.parse(contenido)
      }
      console.log(info);

    }
  })
}

let prod = info;
app.get('/productos', (req, res) => {
  res.send(`Lista de productos ${prod}`)
});


let rand = Math.floor(Math.random() * info.length);
app.get('/productoRandom', (req, res) => {
  res.send(`Prdocuto Random ${rand}`)
});


let fecha = new Date().toLocaleString();
app.get('/fyh', (req, res) => {
  res.send(`Fecha: ${fecha}`);
});


const PORT = 8080;
const server = app.listen(PORT, ()=> {
  console.log(`Server on https://localehost${PORT}/`);
})