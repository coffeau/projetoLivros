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
      livros:[],
      headers: [
        { text: "Título", value: "title" },
        { text: "Autores", value: "authors" },
        { text: "Editora", value: "publisher" },
      ],
    };
  },
  async mounted() {
    let url =
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=pt&printType=books&maxResults=40&key=AIzaSyDb8Cue7PCPcACj9eba6p82EDDLHwXDNLk";

    let data = await this.fazFetch(url)
    this.livros = data
    //data.items.forEach((livro) => {
      //this.livros.push(livro.volumeInfo);
    //});

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
    async fazFetch(url){
        let livros = []
        const response = await fetch(url);
        const data = await response.json();
        data.items.forEach((livro) => {
          livros.push(livro.volumeInfo)
        })

        return livros
      
      /*
      fetch(url).then(function (response) {
      return response.json().then(function (data) {
        let livros = [];
        data.items.forEach((livro) => {
          livros.push(livro.volumeInfo);
        });
      livros.push(data)
      return livros
      });
    });*/
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