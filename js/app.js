//! Variables
const resultado = document.querySelector("#resultado");
const selectYear = document.querySelector("#year");
const selectMarca = document.querySelector("#marca");
const selectModelo = document.querySelector("#modelo");
const selectPuertas = document.querySelector("#puertas");
const selectTransmision = document.querySelector("#transmision");
const selectColor = document.querySelector("#color");
const marcas = [];
let anios = [];
let marca = "";
let objetoMarca;
let anio = "";
let resultadoAnio;

let resultadoModelo;
const datosBusqueda = {
	marca: "",
	anio: "",
	modelo: "",
	puertas: "",
	transmision: "",
	color: "",
};

//! Eventos
document.addEventListener("DOMContentLoaded", () => {
	llenarSelectMarca();
});

//! Funciones

// llenar el selecto de Marca
function llenarSelectMarca() {
	autos.forEach((marca) => {
		marcas.push(marca.marca);
	});
	marcas.sort();
	const brandSet = new Set(marcas);
	brandSet.forEach((brandSet) => {
		const optionMarca = document.createElement("option");
		optionMarca.textContent = `${brandSet}`;
		optionMarca.setAttribute("value", brandSet);
		selectMarca.appendChild(optionMarca);
	});
}

// ! EventListener
// Usuario Seleccionando Marca
selectMarca.addEventListener("change", (e) => {
	marca = e.target.value;
	datosBusqueda.marca = e.target.value;
	filtradoMarca();
	limpiarAnio();
	limpiarModelo();
	limpiarOtros();
});

//usuario selecciona anio
selectYear.addEventListener("change", (e) => {
	anio = e.target.value;
	datosBusqueda.anio = e.target.value;
	filtradoAnio();
	limpiarModelo();
});

//usuario selecciona modelo
selectModelo.addEventListener("change", (e) => {
	datosBusqueda.selectModelo = e.target.value;
	modelo = e.target.value;
	limpiarOtros();
	mostarOtros();
});

function mostarOtros() {
	resultadoModelo = resultadoAnio.filter(filterModelo);

	resultadoModelo.forEach((resultadoModelo) => {
		puertas = resultadoModelo.puertas;
		limpiarOtros();
		datosBusqueda.puertas = puertas;
		transmision = resultadoModelo.transmision;
		datosBusqueda.transmision = transmision;
		color = resultadoModelo.color;
		datosBusqueda.color = color;
		console.log(datosBusqueda);
	});

	selectOtros();
}

function filterModelo(resultadoAnio) {
	return resultadoAnio.modelo == modelo;
}

function selectOtros() {
	//Puertas
	const opcionPuertas = document.createElement("option");
	opcionPuertas.textContent = `${puertas}`;
	opcionPuertas.setAttribute("value", puertas);
	selectPuertas.appendChild(opcionPuertas);

	//transmision
	const opcionTransmision = document.createElement("option");
	opcionTransmision.textContent = `${transmision}`;
	opcionTransmision.setAttribute("value", transmision);
	selectTransmision.appendChild(opcionTransmision);

	//color
	const opcionColor = document.createElement("option");
	opcionColor.textContent = `${color}`;
	opcionColor.setAttribute("value", color);
	selectColor.appendChild(opcionColor);
}

// !funciones
function filtradoAnio() {
	resultadoAnio = objetoMarca.filter(filtrarAnio);
	mostrarModelos();
}

function mostrarModelos() {
	setTimeout(() => {
		resultadoAnio.forEach((resultadoAnio) => {
			let modelos = [];
			modelos.push(resultadoAnio.modelo);
			modelos.forEach((modelos) => {
				const opcionModelos =
					document.createElement("option");
				opcionModelos.textContent = `${modelos}`;
				opcionModelos.setAttribute("value", modelos);
				selectModelo.appendChild(opcionModelos);
			});
		});
	}, 100);
}

function filtrarAnio(objeto) {
	return objeto.year == anio;
}

// llenando los datos en funcion de la marca
function filtradoMarca() {
	objetoMarca = autos.filter(filtrarMarca);
	setTimeout(() => {
		objetoMarca.forEach((year) => {
			anios.push(year.year);
		});
	}, 50);
	anios = [];
	mostrarAnios();
}

function filtrarMarca(auto) {
	return auto.marca === marca;
}

function mostrarAnios() {
	let anioSet = {};
	setTimeout(() => {
		anioSet = new Set(anios);
		anioSet.forEach((anioSet) => {
			const opcionAnio = document.createElement("option");
			opcionAnio.textContent = `${anioSet}`;
			opcionAnio.setAttribute("value", anioSet);
			selectYear.appendChild(opcionAnio);
		});
	}, 100);
}

function limpiarAnio() {
	while (selectYear.firstChild) {
		selectYear.removeChild(selectYear.firstChild);
	}
	const opcionAnio = document.createElement("option");
	opcionAnio.textContent = `Seleccione`;
	selectYear.appendChild(opcionAnio);
}

function limpiarModelo() {
	while (selectModelo.firstChild) {
		selectModelo.removeChild(selectModelo.firstChild);
	}
	const opcionModelos = document.createElement("option");
	opcionModelos.textContent = `Seleccione`;
	selectModelo.appendChild(opcionModelos);
}

function limpiarOtros() {
	// Limpiar Colores

	while (selectColor.firstChild) {
		selectColor.removeChild(selectColor.firstChild);
	}
	const opcionColores = document.createElement("option");
	opcionColores.textContent = `Seleccione`;
	selectColor.appendChild(opcionColores);

	// Limpiar Transmision

	while (selectTransmision.firstChild) {
		selectTransmision.removeChild(selectTransmision.firstChild);
	}
	const opcionTransmision = document.createElement("option");
	opcionTransmision.textContent = `Seleccione`;
	selectTransmision.appendChild(opcionTransmision);

	// Limpiar Puertas

	while (selectPuertas.firstChild) {
		selectPuertas.removeChild(selectPuertas.firstChild);
	}
	const opcionPuerta = document.createElement("option");
	opcionPuerta.textContent = `Seleccione`;
	selectPuertas.appendChild(opcionPuerta);
}
// console.log(datosBusqueda);
