document.addEventListener('DOMContentLoaded', function() {
    var item = 0; // Variavel de controle para o if 

    var buttons = document.getElementsByClassName('button');

    // for para entender qual botao foi clicado
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            // Tira a cor colorida do botão quando mudar clicar em outro
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('teste');
            }
            // Mantem o botao colorido quando for clicado
            this.classList.add('teste');

            // Remove o Iframe Anterior
            var existingIframe = document.querySelector('.iframe');
            if (existingIframe) {
                existingIframe.remove();
            }

            // Com base no botão clicado ele escolhe qual if vai ser verdadeiro
            if (this.id === 'automacao') { //verifica se o elemento que acionou o evento é automação
                if (item !== 1) {
                    console.log('Automação');
                    item = 1;

                    var ifrm = document.createElement("iframe");
                    ifrm.setAttribute("src", "At.html");
                    document.getElementsByClassName('body')[0].appendChild(ifrm);
                    ifrm.classList.add('iframe');
                }
            } else if (this.id === 'banco_de_dados') {//verifica se o elemento que acionou o evento é Banco de Dados
                if (item !== 2) {
                    console.log('Banco de Dados'); // Coloquei para imprimir no console para conferir se estava caindo no If
                    item = 2;

                    var ifrm = document.createElement("iframe");
                    ifrm.setAttribute("src", "Bd.html");
                    document.getElementsByClassName('body')[0].appendChild(ifrm);
                    ifrm.classList.add('iframe');
                }
            } else if (this.id === 'ciencia_de_dados') {//verifica se o elemento que acionou o evento é Ciencia de Dados
                if (item !== 3) {
                    console.log('Ciência de Dados');
                    item = 3;

                    var ifrm = document.createElement("iframe");
                    ifrm.setAttribute("src", "Cd.html");
                    document.getElementsByClassName('body')[0].appendChild(ifrm);
                    ifrm.classList.add('iframe');
                }
            } else if (this.id === 'desenvolvimento_web') {//verifica se o elemento que acionou o evento é Desenvolvimento Web
                if (item !== 4) {
                    console.log('Desenvolvimento Web');
                    item = 4;

                    var ifrm = document.createElement("iframe");
                    ifrm.setAttribute("src", "Dw.html");
                    document.getElementsByClassName('body')[0].appendChild(ifrm);
                    ifrm.classList.add('iframe');
                }
            } else if (this.id === 'linguagem_de_programacao') {//verifica se o elemento que acionou o evento é Linguagem de Programação
                if (item !== 5) {
                    console.log('Linguagem de Programação');
                    item = 5;

                    var ifrm = document.createElement("iframe");
                    ifrm.setAttribute("src", "Lp.html");
                    document.getElementsByClassName('body')[0].appendChild(ifrm);
                    ifrm.classList.add('iframe');
                }
            } else {
                console.log('Botão não reconhecido');
            }
        });
    }
});
