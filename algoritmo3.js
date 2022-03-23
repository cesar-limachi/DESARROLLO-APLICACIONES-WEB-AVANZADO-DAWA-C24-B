function comision(ventas) {
    var ventas = prompt("Ingrese la venta total");
    var pago;
    if (Number(ventas) <= 150) {
        pago = 0;
    }
    else if (Number(ventas) > 150 && Number(ventas) <= 400) {
        pago = Number(ventas) * 0.1;
    }
    else {
        pago = 50 + (Number(ventas) * 0.09);
    }
    /// toFixed permite reducir la cantidad de decimales que obtendremos.
    console.log("Su comision es " + pago.toFixed(2));
}