/*
var nome = "Flavio Ribeiro"
var idade = 31
var frase = "Japão o melhor time do mundo"
alert("Bem vindo "+ nome);
alert(nome+" tem "+idade+" anos");
alert(frase);
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase);
console.log(nome);
console.log(idade);

var lista = ["maca", "pera", "laranja"];
console.log(lista);
alert(lista);
alert(lista[2]);
lista.push("uva");
alert(lista);
lista.pop();
alert(lista);
lista.pop();
alert(lista);
console.log(lista.length);
alert(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.join(" | "));

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maça", cor:"Vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var idade = prompt("Qual a sua idade:");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var count = 0;
while(count <5){
    console.log(count);
    count = count + 1;
};
alert(count ++);

var count;
for(count = 0; count <= 5; count ++){
    alert(count);
}

var d = new Date;
alert(d);
alert("estamos no mês "+(d.getMonth()+1));

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));
*/
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão","Japão","Brasil"));

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
}
function redireciona(){
  //  window.open("https://www.youtube.com");
    window.location.href = "https://www.youtube.com";
}
function trocar(elemento){
//  alert("trocar texto");
//  document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
     
}
function voltar(elemento){
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}
