/* 
    
    3 - Retornar uma string dizendo se os números são ou não iguais, a soma deles, e se a soma é maior ou menor que 10 e maior ou menor que 20
**/

// 1 - Criar uma função que recebe dois números como parâmetros
function checkNumbers(num1, num2) {
    if (num1 == undefined || num2 == undefined) return 'Defina dois números!';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(checkNumbers(0, 0));



