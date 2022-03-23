function multiplos() {
    /// definimos una variable cont que sera igual a 1.
    var cont = 1;
    while (cont <= 50) {
        if (Number(cont) % 7 == 0 && (Number(cont) % 2 != 0 && Number(cont) % 3 != 0 && Number(cont) % 5 != 0)) {
            console.log(cont);
        }
        cont = cont + 1;
    }
}