const lista_Items_arreglo = [
	"Item 1",	"Item 2",	"Item 3",	"Item 4",	"Item 5",	"Item 6",	"Item 7",	"Item 8",
	"Item 9",	"Item 10",	"Item 11",	"Item 12",	"Item 13",	"Item 14",	"Item 15",	"Item 16",
	"Item 17",	"Item 18",	"Item 19",	"Item 20",	"Item 21",	"Item 22"
];


// Variables
const lista_div = document.getElementById('lista_div');
const paginacion_div = document.getElementById('paginacion_div');

let pagina_Actual = 1;
let filas = 5;


DisplayList(lista_Items_arreglo, lista_div, filas, pagina_Actual);
SetupPagination(lista_Items_arreglo, paginacion_div, filas);


// Funciones
function DisplayList (lista_Items_arreglo, lista_div, filas_por_pagina, pagina) {
	lista_div.innerHTML = "";
	pagina--;

	let inicio = filas_por_pagina * pagina;
	let fin = inicio + filas_por_pagina;
	let paginatedItems = lista_Items_arreglo.slice(inicio, fin);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		lista_div.appendChild(item_element);
	}
}

function SetupPagination (lista_Items_arreglo, lista_div, filas_por_pagina) {
	lista_div.innerHTML = "";

	let page_count = Math.ceil(lista_Items_arreglo.length / filas_por_pagina);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, lista_Items_arreglo);
		lista_div.appendChild(btn);
	}
}

function PaginationButton (pagina, items) {
	let button = document.createElement('button');
	button.innerText = pagina;

	if (pagina_Actual == pagina) button.classList.add('active');

	button.addEventListener('click', function () {
		pagina_Actual = pagina;
		DisplayList(items, lista_div, filas, pagina_Actual);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

