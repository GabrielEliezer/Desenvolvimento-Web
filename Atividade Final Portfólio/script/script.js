document.addEventListener('DOMContentLoaded', function() {
    let item = 0; // Variável para controlar a ação conforme o botão clicado

    let buttons = document.getElementsByClassName('button');

    // Adicionando evento de clique para cada botão
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            // Remover a classe 'teste' de todos os botões
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('teste');
            }
            // Adicionar a classe 'teste' apenas ao botão clicado
            buttons[i].classList.add('teste');

            // Remover iframe existente
            let existingIframe = document.querySelector('.iframe');
            if (existingIframe) {
                existingIframe.remove();
            }

            // Determinar a ação com base no botão clicado
            switch(buttons[i].id) {
                case 'automacao':
                    if (item !== 1) {
                        console.log('Automação');
                        item = 1;

                        var ifrm = document.createElement("iframe");
                        ifrm.setAttribute("src", "At.html");
                        document.getElementsByClassName('body')[0].appendChild(ifrm);
                        ifrm.classList.add('iframe');

                    }
                    break;
                case 'banco_de_dados':
                    if (item !== 2) {
                        console.log('Banco de Dados');
                        item = 2;

                        var ifrm = document.createElement("iframe");
                        ifrm.setAttribute("src", "Bd.html");
                        document.getElementsByClassName('body')[0].appendChild(ifrm);
                        ifrm.classList.add('iframe');
                    }
                    break;
                case 'ciencia_de_dados':
                    if (item !== 3) {
                        console.log('Ciência de Dados');
                        item = 3;

                        var ifrm = document.createElement("iframe");
                        ifrm.setAttribute("src", "Cd.html");
                        document.getElementsByClassName('body')[0].appendChild(ifrm);
                        ifrm.classList.add('iframe');
                    }
                    break;
                case 'desenvolvimento_web':
                    if (item !== 4) {
                        console.log('Desenvolvimento Web');
                        item = 4;

                        var ifrm = document.createElement("iframe");
                        ifrm.setAttribute("src", "Dw.html");
                        document.getElementsByClassName('body')[0].appendChild(ifrm);
                        ifrm.classList.add('iframe');
                    }
                    break;
                case 'linguagem_de_programacao':
                    if (item !== 5) {
                        console.log('Linguagem de Programação');
                        item = 5;

                        var ifrm = document.createElement("iframe");
                        ifrm.setAttribute("src", "Lp.html");
                        document.getElementsByClassName('body')[0].appendChild(ifrm);
                        ifrm.classList.add('iframe');
                    }
                    break;
                default:
                    console.log('Botão não reconhecido');
            }
        });
    }
});
