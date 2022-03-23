function arreglo() {
    /// LET es una variable que cambia su valor pero solo funcionara en el bloque donde sera declarodo.
    let cantidad = prompt("Inserte la cantidad de elementos de su lista");
    let arreglo = [];
    var contador = 0;
    while (contador < cantidad) {
        let numero = prompt("Ingrese el numero " + (contador + 1))
        arreglo.push(numero)
        contador = contador + 1;
        console.log(contador)
    }
    alert("El arreglo ingresado es: " + arreglo);
    var des = prompt("Ingrese la cantidad de desplazamientos: ");
    for (var i = 0; i < Number(des); i++) {
        /// El metodo shift nos permite eliminar el elemento en el indice cero.
        var ultimo = arreglo.shift();
        arreglo.push(ultimo)
    }
    console.log(arreglo)
}