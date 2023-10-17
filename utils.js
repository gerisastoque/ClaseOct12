export const obtenerData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/gerisastoque/ClaseOct12/main/data.json")
    const data = response.json();
    return data
}
export class Animal {
	nombre = "";
    tipo = "";
    #element= null

	constructor(nombre,tipo) {
		this.nombre = nombre
        this.tipo= tipo
	}

    #obtenerTexto(){
        const texto= "Hola, mi nombre es " + this.nombre + " y mi raza es "+ this.tipo
        return texto;
    }
    render() {
        const texto= this.#obtenerTexto();
        const p1= document.createElement('p');
        p1.textContent= texto;
        this.#element= p1
        return p1
      }
      onClickListener() {
        if (this.#element) {
          this.#element.addEventListener("click", () => {
            const texto = this.#obtenerTexto();
            alert(texto);
          });
      }
}
}
