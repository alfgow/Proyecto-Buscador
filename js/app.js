//! Variables
const resultado = document.querySelector("#resultado");
const selectYear = document.querySelector("#year");
const selectMarca = document.querySelector("#marca");
const marcas = [];
let anios = [];
let marca = "";
let objetoMarca;
let anio = "";

const datosBusqueda = {
	marca: "",
	anio: "",
	precioMin: "",
	precioMax: "",
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
});

selectYear.addEventListener("change", (e) => {
	anio = e.target.value;
	datosBusqueda.anio = e.target.value;
	console.log(datosBusqueda);

	filtradoAnio();
});

function filtradoAnio() {
	const resultadoAnio = objetoMarca.filter(filtrarAnio);
	console.log(resultadoAnio);
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

// console.log(datosBusqueda);
