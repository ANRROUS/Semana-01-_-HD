
function factorialRecursivo(numero){
    if(numero < 0){
        console.log("Número invalido para calcular factorial, ingrese un número mayor o igual a 0");
    }
    if(numero === 0){
        return 1
    }
    return numero * factorialRecursivo(numero--)
}

//Ejemplo

factorial(5)