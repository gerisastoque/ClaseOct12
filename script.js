import {obtenerData, Animal} from "./utils.js";

const render = async() => {
    const data = await obtenerData();
    console.log(data);

    const animales = data.animales;
    const contenedor = document.getElementById("contenedor");

	for(const animal of animales) {
		const animalRender = new Animal(animal.nombre, animal.tipo);
		const animalParrafo = animalRender.render();
		contenedor.appendChild(animalParrafo);
        animalRender.onClickListener()
	}
}
window.onload = render;
