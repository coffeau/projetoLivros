<template>
  <v-container fluid class="pa-0">
    <v-img
      class="d-flex align-center"
      max-height="89vh"
      src="@/assets/images/Group 3.png"
    >
      <v-row align="center">
        <v-col cols="6" class="ms-md-12 col">
          <div class="titulo"></div>
          <div id="titulo">Login</div>
          <v-container class="inputs">
            <v-divider color="#434C6D"></v-divider>
            <v-text-field
              v-model="user.email"
              dense
              outlined
              class="mt-6"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              type="password"
              dense
              outlined
              label="Senha"
            ></v-text-field>
            <div class="botao">
              <v-btn @click="submitLogin" color="#E8E5AE">Login</v-btn>
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
    <v-snackbar color="red" v-model="errorLogin" danger multline timeout="2000"
      >Usuário ou senha inválidos</v-snackbar
    >
    <v-dialog v-model="novaConta" persistent max-width="300px">
      <v-card>
        <v-card-title>Conta não encontrada.</v-card-title>
        <v-card-text
          >A conta não foi localizada. Deseja criar uma nova conta?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="criarNovaConta">Sim</v-btn>
          <v-btn color="red darken-1" text @click="novaConta = false"
            >Não</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import * as fb from "@/plugins/firebase";
export default {
  data(){
    return{
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    }
  },
  methods:{
    ...mapActions('auth', ['login']),
    async submitLogin(){
      try{
        await fb.auth.signInWithEmailAndPassword(
            this.user.email,
            this.user.password,
          );
          this.login(this.user)
          this.$router.push({name: 'home'})
          } catch (error) {
            const errorCode = error.code;
            switch (errorCode) {
              case "auth/wrong-password":
                this.errorLogin = true;
                break;
              case "auth/invalid-email":
                this.errorLogin = true;
                break;
              case "auth/user-not-found":
                this.novaConta = true;
                break;
              default:
                this.errorLogin = true;
                break;
            }
          }
    },
    async criarNovaConta() {
            this.novaConta = false;
            await fb.auth.createUserWithEmailAndPassword(
                this.user.email,
                this.user.password
            );
            this.submitLogin();
        },
    
  }
};
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