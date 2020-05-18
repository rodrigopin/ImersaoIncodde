var notas1, notas2, nota5, notas10, notas20, notas50, notas100, valor = 0
var n = 20367;
if(n < 1000000){
  valor = n;
  notas100 = n / 100;
  n %= 100;
  notas50 = n / 50;
  n %= 50;
  notas20 = n / 20;
  n %= 20;
  notas10 = n / 10;
  n %= 10;
  notas5 = n / 5;
  n %= 5;
  notas2 = n / 2;
  n %= 2;
  notas1 = n;

  console.log(parseInt(notas1, 10),"nota(s) de R$ 1,00\n");
  console.log(parseInt(notas2, 10),"nota(s) de R$ 2,00\n");
  console.log(parseInt(notas5, 10),"nota(s) de R$ 5,00\n");
  console.log(parseInt(notas10, 10),"nota(s) de R$ 10,00\n");
  console.log(parseInt(notas20, 10),"nota(s) de R$ 20,00\n");
  console.log(parseInt(notas50, 10),"nota(s) de R$ 50,00\n");
  console.log((notas100, 10),"nota(s) de R$ 100,00\n");







}

