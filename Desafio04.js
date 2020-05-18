//Desafio 4
//A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como
//série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é
//igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N
//(N < 46) e mostre os N primeiros números dessa série.
//• Entrada
//O arquivo de entrada contém um valor inteiro N (0 < N < 46)
//• Saída
//Os valores devem ser mostrados na mesma linha, separados por um espaço
//em branco. Não deve haver espaço após o último valor.
let m1 =1, m2 =1, m3 = 0;
var fibonacci = [];
let n=5;
fibonacci[0] = 0;
  if((n > 0 ) && (n < 46)){
    for(let i = 1; i < n; i++){

            m1 = m2 + m3;
            m2 = m3;
            m3 = m1;
            fibonacci[i] = m1;
    } console.log(fibonacci[0]," ", fibonacci[1], " ", fibonacci[2]," ", fibonacci[3], " ", fibonacci[4]);
  }
