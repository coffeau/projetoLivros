<template>
  <v-container class="pa-15">
    <v-row justify="center" mt="100px">
      <v-avatar size="90" color="grey lighten-2">
        <img src="@/assets/images/perfil.png" alt="John"
      /></v-avatar>
    </v-row>

    <v-form>
      <v-container>
        <v-text-field label="Nome" v-model="nome"></v-text-field>
        <v-text-field label="Sobrenome" v-model="sobrenome"></v-text-field>
        <v-btn color="lime darken-1" @click="salvarPerfil">Salvar</v-btn>
      </v-container>
    </v-form>
    <v-snackbar
      color="green"
      v-model="perfilSalvo"
      sucess
      multline
      timeout="2000"
      >Salvo com sucesso!</v-snackbar
    >
  </v-container>
</template>

<script>
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
      temPerfil: false,
      perfilSalvo: false,
    };
  },
  methods: {
    async salvarPerfil() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        const userName = this.nome.concat(",", this.sobrenome);
        this.perfilSalvo = true;
        updateProfile(auth.currentUser, {
          displayName: userName,
        });
      }
    },
  },
  async mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user !== null && user.displayName.length > 0) {
        this.temPerfil = true;
        const userInfo = user.displayName.split(",");
        this.nome = userInfo[0];
        this.sobrenome = userInfo[1];
      } else {
        //
      }
    });
  },
};
</script>

<style></style>
