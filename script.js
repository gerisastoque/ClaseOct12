import {obtenerData, Persona} from "./utils.js";

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
}
window.onload = render;
