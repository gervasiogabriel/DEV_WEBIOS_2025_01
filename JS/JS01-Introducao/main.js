var idade
const ano = 2010
//JavaScript
console.log("hello world") // apresentar uma mensagem
console.clear("") // limpar

// VARIAVEIS
var numero1 = 192 // inicializar uma variavel
console.log(numero1)

var num1 = 4
var num2 = 9
var resultado = num1 + num2
console.log(resultado)

idade = 89 // iniciar a variavel em um outra parte do codigo
console.log(idade)


//ano = 1998
const PI = 3.14

//textos - strings
var nome = 'matheus araujo'
var nome2 = "matheus vinicius"
var nome3 = "12345.6789" // numero em texto por que está dentro de ""
/*console.log(nome)
console.log(nome2)
console.log(nome3)*/
console.log(nome, nome2, nome3)

console.log("olá", "papai") // CONCATENAR1

console.log("o aluno " + nome + " e o aluno " + nome2 + " tem um total de " + nome3 + " dinheiros ") // CONTATENAR 2


// TEMPLATE STRING
console.log(`o aluno ${nome} e o aluno ${nome2} tem um total de ${nome3} dinheiros`) // CONCATENAR 3

//VAR // é flexivel e com menos regras {posso alterar o valor de uma var e recriar a mesma em outras partes do código}

//LET // você não pode recriar a mesma em outras partes do código com o mesmo nome, mas pode chamar e alterar o valor inicial 

//CONST // você não pode recriar a mesma em outras partes do código e nao pode alterar o valor inicial dela garantindo a confiança do dado que está sendo utilizado no decorrer do seu código

console.log(10 / 0)
console.log(-6 / 0)

// OPERADORES ARITMÉTICOS
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)
/*console.log(valor1 % valor2)
console.log(valor1 ++ valor2)
console.log(valor1 -- valor2)*/

//OPERADORES DE COMPARAÇÃO (RELACIONAIS)
console.log(5 == 5)
console.log(5 > 5)
console.log(22 < 8)
console.log( 22 >= 22)
console.log(22 != 23)
console.log('a' == 'a')
console.log(true == false)
console.log(true === 'true') // boolean e o outro é txt > string
console.log(true != 'false') // true

// OPERADORES LÓGICOS
let temCamisa = false
let temCracha = true
console.log(temCamisa);
console.log(temCracha);
console.log(temCamisa == true && temCracha == true);
console.log(temCamisa == true || temCracha == true);