
/*
function alterar_texto(){                     // [0] indica o index 0 de um array que foi gerado por todos elementos da tag p que foram pegas, nesse caso ele pega o P no index 0
  var objeto = document.getElementsByTagName("p")[0]; // getElementsByTagName pega os elementos com a tag P e joga na variavel objeto
  //  alert(objeto);        // alert é a caixa de texto alerta que aparece em cima da pagina, nesse caso mostra a var objeto 
  //objeto.innerHTML = "Olá Dom" // innerHtml adiciona elementos html - innerText adiciona texto 
  //document.getElementById("hello").innerHTML="Hello ID"; // Pega o Elemento pelo ID hello e altera o texto com o comando inner
  
  document.getElementsByClassName("dom")[0].innerHTML = "Hello clã";
  // Precisa especificar o indice pois pode ter mais de um elemento recebendpo a tag dom 

document.querySelector("p").innerHTML="Query Selector" // querySelector busca a primeira tag "p" e altera ela

document.querySelector("#hello").innerHTML="Query Selector ID" // querySelector busca pelo id hello a hashtag indica que é id #hello é o id hello

document.querySelector(".dom").innerHTML="Query Selector CLASS" // querySelector busca a primeira classe chamada dom


/*var novo = document.createElement("p");

  novo.textContent = "Novo parágrafo";
  novo.style.backgroundColor = "#696969";
  novo.style.fontFamily="comic sans MS";
  document.body.appendChild(novo);*/
  
/*
tabela+="<table><tr><td>ID</td><td>Name</td></tr></table>";

tabela  = "<table>";
tabela +=  "<tr>";
tabela +=   "<td>ID</td>";
tabela +=   "<td>Name</td>";
tabela +=  "</tr>";
tabela +=  "<tr>";
tabela +=   "<td>1</td>";
tabela +=   "<td>Carlos Alberto</td>";
tabela +=  "</tr>";
tabela += "</table>";
  
  // tr = linha da tabela
  // td = célula




tabela  = "<table>";
tabela +=  "<tr>";
tabela +=   "<td>ID</td>";
tabela +=   "<td>Name</td>";
tabela +=  "</tr>";
tabela +=  "<tr>";
tabela +=   "<td>1</td>";
tabela +=   "<td>Carlos Alberto</td>";
tabela +=  "</tr>";
tabela += "</table>";

var tabela = document.createElement("table");
var linha1 = document.createElement("tr");
var l1col1 = document.createElement("td");
var l1col2 = document.createElement("td");
var linha2 = document.createElement("tr");
var l2col1 = document.createElement("td");
var l2col2 = document.createElement("td");

l1col1 =document.createTextNode("ID");
l1col2 =createTextNode("Name");
l2col1=createTextNode("1");
l2col2=createTextNode("CarlosAlberto");

linha1.appendChild(l1col1);
linha1.appendChild(l1col2);

linha2.appendChild(l2col1);
linha2.appendChild(l2col2);

ntabela.appendChild(linha1);
ntabela.appendChild(linha2);

document.body.appendChild(ntabela);

// tr = linha da tabela
// td = célula
}

*/



function alterar_texto() {
  // var objeto = document.getElementsByTagName("p")[0];
  // objeto.innerText = "Olá DOM";

  // document.getElementById("hello").innerHTML = "Hello ID";
  // document.getElementsByClassName("dom")[0].innerHTML = "Hello Class";

document.querySelector("p").innerHTML = "Query Selector"
document.querySelector("#hello").innerHTML = "Query Selector ID"
document.querySelector(".dom").innerHTML = "Query Selector Class"

var novo = document.createElement("p");
novo.textContent = "Novo parágrafo";
novo.style.backgroundColor = "#00FF00";
novo.style.fontFamily = "Comic Sans MS"
document.body.appendChild(novo);

tabela  = "<table>";
tabela +=  "<tr>";
tabela +=   "<td>ID</td>";
tabela +=   "<td>Name</td>";
tabela +=  "</tr>";
tabela +=  "<tr>";
tabela +=   "<td>1</td>";
tabela +=   "<td>Carlos Alberto</td>";
tabela +=  "</tr>";
tabela += "</table>";

// tr = linha da tabela
// td = célula

var ntabela = document.createElement("table");
var linha1 = document.createElement("tr");
var l1col1 = document.createElement("td");
var l1col2 = document.createElement("td");
var linha2 = document.createElement("tr");
var l2col1 = document.createElement("td");
var l2col2 = document.createElement("td");

var cel11 = document.createTextNode("ID");
var cel12 = document.createTextNode("Name");
var cel21 = document.createTextNode("1");
var cel22 = document.createTextNode("Carlos Alberto");

l1col1.appendChild(cel11);
l1col2.appendChild(cel12);
l2col1.appendChild(cel21);
l2col2.appendChild(cel22);

linha1.appendChild(l1col1);
linha1.appendChild(l1col2);
linha2.appendChild(l2col1);
linha2.appendChild(l2col2);

ntabela.appendChild(linha1);
ntabela.appendChild(linha2);

l1col1.style.border = "1px solid #000";
l1col2.style.border = "1px solid #000";
l2col1.style.border = "1px solid #000";
l2col2.style.border = "1px solid #000";
ntabela.style.border = "1px solid #000";

document.body.appendChild(ntabela);

document.body.appendChild(ntabela);



}