<template>
  <v-container fluid class="pa-0">
    <v-img class="d-flex align-center" max-height="89vh" src="@/assets/images/Group 3.png">
      <v-row align="center">
        <v-col cols="6" class="ms-md-12 col">
          <div class="titulo"></div>
          <div id="titulo">Login</div>
          <v-container class="inputs">
            <v-divider color="#434C6D"></v-divider>
            <v-text-field dense outlined class="mt-6" label="E-mail"></v-text-field>
            <v-text-field dense outlined label="Senha"></v-text-field>
            <div class="botao">
              <v-btn color="#E8E5AE">Salvar</v-btn>
            </div>
          </v-container>
        </v-col>
        <!-- <v-col cols="5" class="ms-md-12 logo">
          <div class="titulo">
            <div id="logo">Wormz</div>
            <v-divider cols="3" id="divider" color="#E8E5AE"></v-divider>
            <div id="conteudo" class="mt-6">Quer descobrir sua próxima leitura?</div>
          </div>
        </v-col>  !-->
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.col {
  text-align: center;
}
#titulo {
  font-family: "Libre Baskerville", serif;
  font-size: 2.5em;
  color: black;
}

.inputs {
  max-width: 50%;
}

#logo {
  font-family: "Libre Baskerville", serif;
  font-size: 4em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #e8e5ae;
}

.logo {
  margin: 60vh 0 0 0;
}

#conteudo {
  font-family: "Encode Sans", sans-serif;
  color: #e8e5ae;
}
</style>