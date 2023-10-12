export const saludar = () => {
    alert("HELLO HELLO SNAPCHAT");
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
        const elementoP = document.createElement('p');
        elementoP.textContent = text;
        return elementoP;
      }
}