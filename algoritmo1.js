function mayor() {
    /// En la pagina web mandamos una alerta par que el usuario ingrese sus 3 datos
    alert("Ingrese sus 3 datos numericos");
    /// Con el comando prompt pedimos al usuario ingresar sus valores numericos
    var n1 = prompt("numero 1");
    var n2 = prompt("numero 2");
    var n3 = prompt("numero 3");
    /// Number es un objeto primitivo que permite representar valores numericos.
    if (Number(n1) > Number(n2) && Number(n1) > Number(n3)) {
        console.log("El numero mayor es " + n1);
    }
    else if (Number(n2) > Number(n1) && Number(n2) > Number(n3)) {
        console.log("El numero mayor es " + n2);
    }
    else if (Number(n3) > Number(n1) && Number(n3) > Number(n1)) {
        console.log("El numero mayor es " + n3);
    }
}