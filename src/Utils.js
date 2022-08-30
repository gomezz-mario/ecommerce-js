
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const timeStampToString = (timeStamp) => {
	const fecha = timeStamp.toDate();

	let diaDeSemana = dias[fecha.getDay()];
	let dia = fecha.getDate();
	let mes = meses[fecha.getMonth()];
	let anio = 1900 + fecha.getYear();
	let horas = fecha.getHours() < 10 ? "0"+fecha.getHours() : fecha.getHours();
	let minutes = fecha.getMinutes() < 10 ? "0"+fecha.getMinutes() : fecha.getMinutes();
	return (diaDeSemana + " " + dia + " de " + mes + " de " + anio + ", " + horas + ":" + minutes + ".");
} 

export default timeStampToString;