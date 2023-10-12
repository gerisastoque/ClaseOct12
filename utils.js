export const obtenerData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/gerisastoque/ClaseOct12/main/data.json")
    const data = response.json();
    return data
}
export class Persona{
    nombre="";
    edad="";

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    render() {
        const text= " hola, mi nombre es "+this.nombre+" y tengo "+this.edad+" años."
        const p = document.createElement("p");
        p.textContent = text;
        return p;
      }
}