/*const http = require('http');

const server = http.createServer((request, response) => {
	switch (request.url) {
		case '/':
			response.end(`Server Working`);
			break;
		case '/coder':
			response.end(`Hola coder`);
			break;
		default:
			response.end(`404 - Page not found`);
			break;
	}
})

const ConnectedServer = server.listen(8080,()=>{
	console.log(`Servidor escuchando en`)
})

------------------------------------------------------
const express = require('Express');

const app = express();

app.get('/',(request, response) => {
	response.send('Servidro iniciado con express!');
});

app.get('/coder',(request, response) => {
	response.send('Hola coder!');
});

app.get('*',(request, response) => {
	response.send('404 - Page not found');
});


const server = app.listen(3000, () => {
	console.log(`Servidor escuchando en https://localehost3000/`)
})
---------------------------------------------------------*/

const express = require('express');
const Mensajes = require('./src/Mensajes.js')

const app = express();
const msg = new Mensajes();

app.get('/', (req, res) => {
	res.send(msg.generarPlantillaMsg(1, 'red', 'Juan'));
});

let vistas = 0;
app.get('/vistas', (req, res) => {
	res.send(`Cantidad de visitas es ${vistas++}`)
});

let fecha = new Date().toLocaleString();
app.get('/fyh', (req, res) => {
	res.send(`Fecha: ${fecha}`);
});


const PORT = 3000;
const server = app.listen(PORT, ()=> {
	console.log(`Server on https://localehost${PORT}/`);
})