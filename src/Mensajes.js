class Mensajes {
	constructor(){}


	generarPlantillaMsg(tamanio, color, nombre){
		const plantilla = `<h${tamanio} style="color: ${color};">Bienvenidos ${nombre }al servidor express</h${tamanio}>`
	} 
}

module.exports = Mensajes;