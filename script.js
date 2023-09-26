function verNumeroNegativo() {

    var valores = [];

    var sum = 0;

    for ( var i = 0; i < valores.length; i++) {
        sum += valores[i]
    }
    
    while (true) {
        var entrada = prompt("Ingresa un numero(Un numero negativo para terminar):");
        var num = parseFloat(entrada);

        if(isNaN(num)) {
            alert("por favor ingresar numero valido. ")
        } else {
            if (num < 0) {
                break;
                alert("la suma es " + sum)
            } else {
                valores.push(num);
            }
        }
    }
}
verNumeroNegativo();