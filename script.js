function enviarWhats(event) {
    event.preventDefault()
    let nome = document.getElementById('nome').value;
    let mensagem = document.getElementById('mensagem').value;
    let telefone = '5581999999999';

    let texto = `Olá! me chamo ${nome}, ${mensagem}`;
    let msgFormatada = encodeURIComponent(texto)

    url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`

    window.open(url, '_blank')  
}