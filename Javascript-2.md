
# Operadores

## Aritméticos: retornam o resultado de uma operação
+ Somar
- Subtrair 
* multiplicar
/ dividir 
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false):
<   menor que
>   maior que
<=  menor ou igual
>=  menor ou igual

## Compradores Lógicos: teste lógico, retorno boleano (true / false)
==       igualdade entre sentenças (valor)
!=       diferença entre sentenças (valor)
===      igualdade entre sentenças (valor e tipo)
!==      diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

a = b
a = 4

* Atribuição
a = b
a = 4

## Operadores de Lógica e juncão lógica
!        NÃO (NOT)
&&       E (AND)
||       OU (OR)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:

a != b      // o valor de a é diferente de b
x !== y    // o valor e o tipo de x são diferentes y
!a == b    // o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variavel a partir de uma condição lógica, economiza IFs

Exemplo:

var meu carro = cor == "Preto" ? "preto" : "branco";

## IF
if (...) {

}

if (cor == "preto") {
    meucarro = "preto";
} else {
    meucarro = "cinza";
}

## Else if
else {

}

* Exemplo 
if (cor == "preto") {
    meucarro = "preto";
} else if(cor == "vermelho") {
    meucarro = "cinza";
}
else if(cor == "amarelo") {
    meucarro = "branco";
} else {
    meucarro = "azul";
}

## Switch

switch (cor) {
    case 'branco' :
       meuCarro = 'branco'
       break;
    case 'vermelho' :
       meuCarro = 'vermelho'
       break;
    case 'amarela' :
       meuCarro = 'amarela'
       break;
    default :
        console.log('não temos a cor desejada');
}

## media
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 8) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}



## Laços de Repetição
for ([expressaoInicial]; [condicao]; [incremento])

while([condicao]){
    [execucao]
}

var contador = 0;
wile(1 < 10) {
    contador++
}

var hora = 23;
while (hora > 0){
    
    console.log(hora);
    hora--;;
}

do {
    [execução]
} while ([condição])

// fazer a revisão do carro aos 10 km
var Km;

var revisao = 3;
for(Km = 0; Km < revisao; Km++ ){
    console.log("apenas " + Km + "Kms então pode rodar");
}  


### Cálculo de média de alunos

 var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
 ]
 var nota = 0;
 for (var i = 0; i < alunos.length; i++){
    
    nota = 0
    aluno = alunos[i]
    console.log("Aluno: "aluno[i]);

    for( c = 0; c <aluno.lenth; c++ ){
        nota += aluno[c]
    } 

    media = nota / 4
    
    if(media >= 7) {
        resultado = "aprovado";
        } else {
            resultado = "reprovado";
        }

    console.log("Media: " + media + " - " + resultado);
 }




 ## funções

 - Evitar a repetição de código
 - Realizar chamadas dinâmicas de algoritmos

 function calculoMedia( notas ) {
    
      
      var notas = 0
      for ( c = 0; c < notas.length; c++) {
        notas += notas[c];
      }
      
      media = notas / notas.length

      return media;
 }