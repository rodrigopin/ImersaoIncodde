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
let m1 =0, m2 =1, m3 = 0;
n=5;
  if((n > 0) && (n < 46)){
    for(i = 0; i < n; i++){
    if(i == 0){
      m1 = 0;
      console.log("m1", m1);
    }
    if(i ==1){
      m2 = 1;
      console.log("m2", m2);
    }
    else{
        m1 = m2 + m3;
        m2 = m3 + m1;
        m3 = m1 + m2;
        console.log("m3", m3);
        console.log("m1", m1);
        console.log("m2", m2);
    }
    //console.log("m1", m1);
    //console.log("m2", m2);
    //console.log("m3", m3);
  }
  }
