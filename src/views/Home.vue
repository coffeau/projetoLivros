<template>

  <div id="app">
    <v-divider color="#E8E5AE"></v-divider>
    <v-container id="containerTitulo" fluid class="primary pa-0">
      <v-img
        class="d-flex align-center"
        max-height="89vh"
        src="@/assets/images/livros-background.png"
      >
        <v-row>
          <v-col cols="6" class="ms-md-12">
            <div class="titulo">
              <div id="titulo">Wormz</div>
              <v-divider id="divider" color="#E8E5AE"></v-divider>
              <div id="conteudo" class="mt-6">
                Está querendo ler algum livro, porém não sabe onde buscar recomendações? Faça o quizz e descubra
                algumas leituras, com a possibilidade de escrever e ler resenhas pela sua conta do GoogleBooks, tudo em um só site!
              </div>
            </div>

            <div class="botoes mt-9">
              <v-btn
                @click="login"
                elevation="2"
                x-large
                color="#E8E5AE"
                class="ms-4 primary--text"
              >Login</v-btn>
              <v-btn icon elevation="2" x-large class="ms-4 secondary">
                <v-icon color="primary">mdi-google</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-img>

    </v-container>
  </div>

  <!-- Fazer areas -->
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@300&family=Encode+Sans&family=Libre+Baskerville&display=swap");

.subtitle-2 {
  font-family: "Alegreya Sans SC", sans-serif;
}

#titulo {
  font-family: "Libre Baskerville", serif;
  font-size: 6em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #e8e5ae;
}

#divider {
  width: 50%;
}

#subtitulo {
  font-family: "Encode Sans", sans-serif;
  color: #e8e5ae;
}

.livroo {
  margin: -290px 0vw -295px 50vw;
  position: relative;
}

.textoFooter {
  font-family: "Alegreya Sans SC", sans-serif;
  font-size: 1em;
}

#conteudo {
  font-family: "Encode Sans", sans-serif;
  color: #e8e5ae;
}

.footer {
  height: 5vh;
}

.lista-app-bar:hover {
  cursor: pointer;
}
</style>