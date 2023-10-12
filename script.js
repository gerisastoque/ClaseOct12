import {obtenerData, Persona} from "./utils.js";

const render = async() => {
    const data = await obtenerData();

    const personas= data.personas;
    const contenedor = document.querySelector("#contenedor");

    for(persona of personas){
        const personaOb = new Persona(persona.nombre,persona.edad);
        const elementoP= personaOb.render();
        contenedor.appendChild(elementoP);
    }
}
window.onload = render;
