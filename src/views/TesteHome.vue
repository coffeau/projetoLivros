<template>
  <div id="app">
      <div class="fundo">
        <v-app-bar app flat color="primary">
            <h1 class="subtitle-2 secondary--text">HOME</h1>
            <h1 class="ms-2 subtitle-2 secondary--text">QUIZZ</h1>
            <v-spacer></v-spacer>
            <h1 class="subtitle-2 secondary--text">PERFIL</h1>
            <v-icon color="secondary">mdi-chevron-down</v-icon>
        </v-app-bar>
        <v-divider color="#E8E5AE"></v-divider>
        <v-container id="containerTitulo" fluid class="primary py-10 px-10">
          <v-row>
            <v-col cols="6" class="ms-md-10">
              <div class="titulo"> 
                <div id="titulo">Nome</div>
                <v-divider id="divider" color="#E8E5AE"></v-divider>
                <div id="subtitulo" class="mt-3">Quer descubrir sua próxima leitura? </div>
              </div>
        
              <div class="botoes mt-9">
                <v-btn elevation="2" x-large color="#E8E5AE" class="ms-4 primary--text">Cadastro</v-btn>
                <v-btn icon elevation="2" x-large class="ms-4 secondary"><v-icon color="primary">mdi-google</v-icon></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
        
        <v-img
        class="livro"
        max-width='591.2' 
        max-height='585.71'
        src='@/assets/images/livro.png'
        ></v-img>

        <v-spacer></v-spacer>

        <v-container id="containerConteudo" fluid fill-height>
          <v-row>
            <v-col cols="6" class="px-10 py-10">
              <div id="conteudo" class="mx-md-10">
                Está querendo ler algum livro, porém não sabe onde buscar recomendações? Faça o quizz e descubra
                algumas leituras, com a possibilidade de escrever e ler resenhas pela sua conta do GoogleBooks, tudo em um só site! 
              </div>
            </v-col>
          </v-row>
        </v-container>
  
        <v-divider color="#434C6D"></v-divider>
        <v-footer color="white" class="footer">
          <div class="textoFooter">Criado por Kauane Delvoss e Eduarda Saibert :)</div>
        </v-footer>
      </div>
  </div>

  <!-- Fazer areas -->
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@300&family=Encode+Sans&family=Libre+Baskerville&display=swap');

.subtitle-2{
  font-family: 'Alegreya Sans SC', sans-serif;
}

#titulo{
  font-family: 'Libre Baskerville', serif;
  font-size: 6em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #E8E5AE;
}

#divider{
  width: 50%;
}

#subtitulo{
  font-family: 'Encode Sans', sans-serif;
  color:#E8E5AE;
}

.livro{
  margin: -290px 0vw -295px 50vw;
  position: fixed;
}

#containerConteudo{
  height: 45vh;
}

.textoFooter{
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 1em;
}

#conteudo{
  font-family: 'Encode Sans', sans-serif;
}



</style>