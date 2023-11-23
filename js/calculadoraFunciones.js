function sumarNumerosCompleto(primero, segundo){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumar numeros'+n1)
    console.log('Funcion sumar numeros'+n2)
    var resultado = n1 + n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText=resultado;
}

function restarNumerosCompleto(primero, segundo){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumar numeros'+n1)
    console.log('Funcion sumar numeros'+n2)
    var resultado = n1 - n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText=resultado;
}

function dividirNumerosCompleto(primero, segundo){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumar numeros'+n1)
    console.log('Funcion sumar numeros'+n2)
    var resultado = n1 / n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText=resultado;
}

function multiplicarNumerosCompleto(primero, segundo){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumar numeros'+n1)
    console.log('Funcion sumar numeros'+n2)
    var resultado = n1 * n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText=resultado;
}

function CambiarImgCompleto(){
    var resultado = document.getElementById('imangeid').src='../img/images.jpg';
    console.log(resultado);
    document.getElementById('idResultado2').innerText=resultado;
}
