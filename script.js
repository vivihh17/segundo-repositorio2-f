const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const texto = documento.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');

    campoResultado.textContent = texto;
}

