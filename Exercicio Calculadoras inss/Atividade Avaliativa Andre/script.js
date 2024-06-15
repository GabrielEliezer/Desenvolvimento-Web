/*
var pessoas, index;

function addPessoa(Nome, Idade, Nacionalidade){
    var tabela = document.getElementById("idtablee");
    var qtdLinhas = tabela.rows.length;
    var linha = tabela.insertRow(qtdLinhas);

    var cellId = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellNacionalidade = linha.insertCell(3);

    cellId.innerHTML = qtdLinhas;
    cellNome.innerHTML = Nome;
    cellIdade.innerHTML = Idade;
    cellNacionalidade.innerHTML = Nacionalidade;

}

function excluirDado(){
        // Exclui a Ultima linha da tabela
    var tabela = document.getElementById("idtablee");
    var qtdLinhas = tabela.rows.length;
    
    if(qtdLinhas>=2){
    tabela.deleteRow(qtdLinhas - 1);
}
}*/


var pessoas, index;

function addPessoa(Nome, Idade, Nacionalidade){
    var tabela = document.getElementById("idtablee"); // pega a tabela com o id dela
    var qtdLinhas = tabela.rows.length; // Retorna a quantidade de linhas da tabela e salva em qtdLinhas
    var linha = tabela.insertRow(qtdLinhas); // insere uma linha nova depois da ultima linha 

    var cellId = linha.insertCell(0); // Insere os valores na tabela na ultima linha existente, cada um em uma celula (cell)
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellNacionalidade = linha.insertCell(3);

    cellId.innerHTML =qtdLinhas; // cellId insere um valor com o innerHTML na celula com nome ID com o valor de qtdLinhas
    cellNome.innerHTML = Nome;
    cellIdade.innerHTML = Idade;
    cellNacionalidade.innerHTML = Nacionalidade;


}

function excluirDado(){
        // Exclui a Ultima linha da tabela
    var tabela = document.getElementById("idtablee");
    var qtdLinhas = tabela.rows.length;
    
    if(qtdLinhas>=2){ // Para evitar que exclua o cabeçalho da tabela 
    tabela.deleteRow(qtdLinhas - 1);
}
}


function editarLine() {
    var lineIndex = prompt("Informe o ID da linha a ser editada: ");
    var table = document.getElementById("idtablee"); // peguei o id da tabela
    var linha = table.rows[lineIndex]; // Seleciona a linha especificada pelo índice
    
    var newname = prompt("Informe um Novo Nome:");
    
    //alterar o conteúdo da segunda célula índice 1 na linha selecionada:
   // table.rows[linha].cells[1].textContent = newname;

    var cell = table.rows[lineIndex].cells[1]; // Coloco aqui a linha e a coluna do item que eu quero editar

    cell.textContent = newname; //textContent altera os valores da celula de acordo com o que queremos colocar nele


    
    var newage = prompt("Informe uma Nova Idade:");
    var cell = table.rows[lineIndex].cells[2]; // Coloco aqui a linha e a coluna do item que eu quero editar

    cell.textContent = newage;



    var newnationality = prompt("Informe uma Nova Nacionalidade:");
    
    // alterar o conteúdo da segunda célula índice 1 na linha selecionada:
    // table.rows[linha].cells[1].textContent = newname;
    // var cell = table.rows[1].cells[2];   esse comando pega a linha da tabela (table.rows) com indice 1 e a celula 2 ou seja ...
    // ...Esse comando pega a linha 1 e a celula 2 da linha 1.

    var cell = table.rows[lineIndex].cells[3]; // Coloco aqui a linha e a coluna do item que eu quero editar

    cell.textContent = newnationality;


}

function excluirlinha() {
    var table = document.getElementById("idtablee");

    if (table.rows.length > 0) {
        var excluirline = prompt("Informe a linha que você deseja excluir: ");
        if (excluirline >= 0 && excluirline < table.rows.length+1) {
            table.deleteRow(excluirline);

            // Reordenar IDs das linhas
            for (var i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[0].textContent = i + 1;
            }
        } else {
            alert("Índice inválido!");
        }
    } else {
        alert("A tabela está vazia!");
    }
}