const frm = document.querySelector('form');
const resp = document.querySelector('h2');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	calcularEMostrarMedia();
});

function calcularEMostrarMedia() {
	const n1 = parseFloat(frm.n1.value);
	const n2 = parseFloat(frm.n2.value);
	const n3 = parseFloat(frm.n3.value);
	const n4 = parseFloat(frm.n4.value);
	const n5 = parseFloat(frm.n5.value);

	const resultado = calcularMedia(n1, n2, n3, n4, n5);
	resp.innerText = ` Média: ${resultado.toFixed(2)}`;

	frm.n1.value = '';
	frm.n2.value = '';
	frm.n3.value = '';
	frm.n4.value = '';
	frm.n5.value = '';
}

const calcularMedia = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;
