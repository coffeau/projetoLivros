<template>
  <div id="app">
    <v-container fluid>
      <v-data-table
        :headers="headers"
        :items="livros"
        :items-per-page="15"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script>
<script>
export default {
  data() {
    return {
      livros: [],
      headers: [
        { text: "Título", value: "title" },
        { text: "Autores", value: "authors" },
        { text: "Editora", value: "publisher" },
      ],
    };
  },
  mounted() {
    ///const data = this.fazFetch(
    ///"https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=pt&printType=books&maxResults=40&key=AIzaSyDb8Cue7PCPcACj9eba6p82EDDLHwXDNLk"
    ///);
    let url =
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=pt&printType=books&maxResults=40&key=AIzaSyDb8Cue7PCPcACj9eba6p82EDDLHwXDNLk";
    const teste = fetch(url).then(function (response) {
      return response.json().then(function (data) {
        let livros = [];
        data.items.forEach((livro) => {
          livros.push(livro.volumeInfo);
        });
        return livros.map(function(livro){
          this.livros.push()
        })
      });
    });
    //data.items.forEach((livro) => {
      //this.livros.push(livro.volumeInfo);
    //});

    this.livros = teste;

    // this.livros = JSON.parse(data).items[2].volumeInfo;
    // // livros = livros.items;
    // let tabela = document.getElementById("tabela");
    // this.aleatorio(livros);

    // Object.keys(livros).forEach(function (element) {
    //   let linha = this.criaLinha(livros[element]);
    //   tabela.appendChild(linha);
    // });
  },

  computed: {
    criaLinha(livro) {
      var linha = document.createElement("tr");
      var tdId = document.createElement("td");
      var tdNome = document.createElement("td");
      tdId.innerHTML = livro.volumeInfo.authors;
      tdNome.innerHTML = livro.volumeInfo.title;

      linha.appendChild(tdId);
      linha.appendChild(tdNome);

      return linha;
    },
  },
  methods: {
    // fazGet(url) {
    //  let request = new XMLHttpRequest();
    //  request.open("GET", url, false);
    //  request.send();
    //  return request.responseText;
    //},
    fazFetch(url) {
      fetch(url).then(function (response) {
        return response.json();
      });
    },
    aleatorio(livros) {
      let numeroAleatorio = Math.floor(Math.random() * 41);
      let livroEscolhido = livros[numeroAleatorio];
      let isbn = livroEscolhido.id;
      console.log(isbn);

      google.books.load();

      function initialize() {
        var viewer = new google.books.DefaultViewer(
          document.getElementById("viewerCanvas")
        );
        viewer.load(isbn);
      }

      google.books.setOnLoadCallback(initialize);
      console.log(
        livroEscolhido.volumeInfo.title,
        livroEscolhido.volumeInfo.authors
      );
    },
  },
};
</script>

<style>
</style>