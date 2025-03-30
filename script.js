
function factorialRecursivo(numero){
    if(numero === 0){
        return 1
    }
    return numero * factorialRecursivo(numero--)
}

//Ejemplo

factorial(5)