import {obtenerData, Persona, Animal} from "./utils.js";

const render = async() => {
    const data = await obtenerData();
    console.log(data);

    const personas= data.personas;
    const contenedor = document.getElementById("contenedor");

    for(const persona of personas){
        const personaOb = new Persona(persona.nombre, persona.edad);
        const p= personaOb.render();
        contenedor.appendChild(p);
    }
    const animales = data.animales;
    const contenedor2 = document.getElementById("contenedor");

	for(const animal of animales) {
		const animalRender = new Animal(animal.nombre, animal.tipo);
		const animalParrafo = animalRender.render();
		contenedor.appendChild(animalParrafo);
	}
}
window.onload = render;
