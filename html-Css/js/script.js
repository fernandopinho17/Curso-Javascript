
  function calculoMedia( notas ) {
    
      
    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
      soma += notas[c];

}
    
    media = soma / notas.length;
    return media;
}

let media; // escopo global

function aprovação( notas ){

let media = calcularMedia( notas ); // escopo da função

let condicao = media >= 8 ? "aprovado" : "reprovado";

return 'Média: ' + '- Resultado: ' + condicao;

}

// Função Recursiva

function contaemregressiva(numero){

console.log(numero);

let proximoNumero = numero -1;

if(numero > 0)
   contagemRegressiva(numero--); 

}

// contagemRegressiva(50);

document.addEventListener('submit', function( evento ) {

   evento.preventDefault();

   let formulario = document.getElementById('formulario-01')

   let dados = new FormData(formulario);

   let objeto = [];

let notas = 0;

   for(let key of dados.keys()) {
     objeto[key] = dados.get(Key);
      
     // adicionar itens no array
     notas.push( parseIntdados.get(key));

   }

   console.log(notas)

   console.log(objeto);

   document.getElementById('resultado').innerHTML = aprovacao(notas);
   

});