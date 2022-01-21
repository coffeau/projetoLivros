function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(livro){
    linha = document.createElement('tr');
    tdId = document.createElement('td');
    tdNome = document.createElement('td');
    tdId.innerHTML = livro.volumeInfo.authors;
    tdNome.innerHTML = livro.volumeInfo.title;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    
    return linha;
}

function main(){
    let data = fazGet("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=pt&printType=books&maxResults=40&key=AIzaSyDb8Cue7PCPcACj9eba6p82EDDLHwXDNLk")
    console.log(data)
    livros = JSON.parse(data);
    livros = livros.items
    let tabela = document.getElementById('tabela')
    aleatorio(livros)

    Object.keys(livros).forEach(function(element) {
        let linha = criaLinha(livros[element]);
        tabela.appendChild(linha);
    });
    
}

function aleatorio(livros){
    let numeroAleatorio = Math.floor(Math.random() * 41);
    let livroEscolhido = livros[numeroAleatorio]
    let isbn = livroEscolhido.id
    console.log(isbn)

    google.books.load();

    function initialize() {
      var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      viewer.load(isbn);
    }

    google.books.setOnLoadCallback(initialize);
    console.log(livroEscolhido.volumeInfo.title, livroEscolhido.volumeInfo.authors)
}
