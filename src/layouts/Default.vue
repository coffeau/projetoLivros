<template>
  <v-app>
    <div class="fundo">
      <v-app-bar app flat color="primary" min-height="6vh">
        <h1 @click="home" class="lista-app-bar subtitle-2 secondary--text">
          HOME
        </h1>
        <h1
          @click="formulario"
          class="lista-app-bar ms-2 subtitle-2 secondary--text"
        >
          QUIZZ
        </h1>
        <v-spacer></v-spacer>

        <v-menu v-if="loggedIn" open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <h1 class="lista-app-bar lista-app-bar subtitle-2 secondary--text">
              PERFIL
              <v-icon color="secondary" v-bind="attrs" v-on="on"
                >mdi-chevron-down</v-icon
              >
            </h1>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Olá, {{ name }} </v-list-item-title>
            </v-list-item>
            <hr />

            <v-list-item class="list-item">
              <v-list-item-title @click="perfil">Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item class="list-item">
              <v-list-item-title @click="submitLogout"
                >Logout</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>

      <!-- <v-divider color="#E8E5AE"></v-divider> -->
      <v-footer app color="primary" class="footer">
        <div class="textoFooter secondary--text">
          Criado por Kauane Delvoss e Eduarda Saibert :)
        </div>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as fb from "@/plugins/firebase";
export default {
  data(){
    return{
      menu:false,
      name: '',
      currentUser: ''
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
  async mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user !== null && user.displayName.length > 0) {
        const userInfo = user.displayName.split(",");
        this.name = userInfo[0];
      } else {
        //
      }
    });
  },
  methods: {
    ...mapActions('auth', ['logout']),
    home() {
      this.$router.push({
        name: "Home"
      });
    },

    formulario(){
      this.$router.push({
        name: "formulario"
      });
    },
    perfil(){
      this.$router.push({
        path: '/perfil'
      })
    },
    async submitLogout(){
      await fb.auth.signOut()
      this.logout()
      this.uid = ''
      this.menu = false
      this.$router.push({
          name:'Login'
        })
    }
  },

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

.lista-app-bar:hover,
.list-item:hover {
  cursor: pointer;
}
</style>