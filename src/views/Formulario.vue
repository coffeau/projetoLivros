<template>
  <v-stepper non-linear v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        editable
        step="1"
        click="save()"
        placeholder="preferenciaGenero"
      >
        Gêneros
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" editable step="2">
        Configuração do livro
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" editable> Estrutura Textual </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container class="px-0" fluid>
          <h3>
            Por qual gênero você mais se interessa? teste:
            {{ preferenciaGenero }}
          </h3>
          <v-radio-group v-model="preferenciaGenero">
            <v-radio
              v-for="n in generos"
              :key="n.nome"
              :label="`${n.nome}`"
              :value="n.nome"
              color="secondary"
            ></v-radio>
          </v-radio-group>
        </v-container>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container class="px-0" fluid>
          <h3>
            Qual sua preferência de temporalidade do livro?
            {{ preferenciaTemporalidade }}
          </h3>
          <v-radio-group v-model="preferenciaTemporalidade">
            <v-radio
              v-for="n in temporalidade"
              :key="n.nome"
              :label="`${n.nome}`"
              :value="n.nome"
              color="secondary"
            ></v-radio>
          </v-radio-group>
        </v-container>
        <v-divider />
        <v-container class="px-0" fluid>
          <h3>
            Qual sua preferência de duração de leitura? {{ preferenciaDuracao }}
          </h3>
          <v-radio-group v-model="preferenciaDuracao">
            <v-radio
              v-for="n in duracao"
              :key="n.nome"
              :label="`${n.nome}`"
              :value="n.nome"
              color="secondary"
            ></v-radio>
          </v-radio-group>
        </v-container>
        <v-divider />
        <v-container class="px-0" fluid>
          <h3>Gostaria de ler obras...{{ preferenciaNacionalidade }}</h3>
          <v-radio-group v-model="preferenciaNacionalidade">
            <v-radio
              v-for="n in nacionalidade"
              :key="n.nome"
              :label="`${n.nome}`"
              :value="n.nome"
              color="secondary"
            ></v-radio>
          </v-radio-group>
        </v-container>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text @click="e1 = 1"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container class="px-0" fluid>
          <h3>
            Qual sua estrutura textual preferida? {{ preferenciaEstrutura }}
          </h3>
          <v-radio-group v-model="preferenciaEstrutura">
            <v-radio
              v-for="n in estrutura"
              :key="n.nome"
              :label="`${n.nome}`"
              :value="n.nome"
              color="secondary"
            ></v-radio>
          </v-radio-group>
        </v-container>

        <v-btn color="success" @click="save()"> Salvar </v-btn>

        <v-btn text @click="e1 = 2"> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { collection, addDoc, getFirestore } from "firebase/firestore";
import * as db from '@/plugins/firebase'
export default {
  data() {
    var preferenciaGenero = "";
    var preferenciaTemporalidade = "";
    var preferenciaDuracao = "";
    var preferenciaNacionalidade = "";
    var preferenciaEstrutura = "";
    var uid = "";
    const generos = [
      {
        nome: "Romance",
        descrição:
          "clima de paixão e drama, que te deixam um quentinho no coração.",
      },
      {
        nome: "Suspense",
        descricao:
          "livros em que o final é totalmente inesperado, e muitas vezes te fazem roer as unhas.",
      },
      {
        nome: "Horror",
        descricao:
          "Nos aterroriza com histórias de fantasmas, mortos-vivos, entre várias figuras místicas. Algumas histórias são baseadas em fatos reais.",
      },
      {
        nome: "Ficção científica",
        descricao:
          "utopias, distopias e muita filosofia sobre o futuro, com um pouco de sátira sobre a realidade.",
      },
      {
        nome: "Fantasia",
        descricao:
          "mundos totalmente novos, criaturas não-humanas, desde reinos de fadas até fendas entre mundos. Uma literatura irreal e contagiante.",
      },
      {
        nome: "Não ficção",
        descricao:
          "livros que além de contar histórias nos mostram as ideias do passado, seja recente ou antigo.",
      },
      {
        nome: "Romance policial",
        descricao: "detetives",
      },
      {
        nome: "Sátira",
        descricao:
          "poesias com um tom de sarcasmo, misturando tragédia e bom humor.",
      },
      {
        nome: "Haicai",
        descricao:
          "poesias recentemente popularizadas, inspiradas no modelo japonês, com 3 versos por estrofe.",
      },
      {
        nome: "Auto",
        descricao: "sátiras de intenção de moralizar e educar seus leitores.",
      },
      {
        nome: "Comédia",
        descricao: "o nome já diz, o que vale aqui é rir.",
      },
      {
        nome: "Tragédia",
        descricao: "aqui o drama reina.",
      },
      {
        nome: "Tragicomédia",
        descricao: "a realidade é ruim, mas pelo menos é engraçada.",
      },
      {
        nome: "Farsa",
        descricao:
          "inspirada em situações do cotidiano, tudo é excêntrico, exagerado e cômico.",
      },
      {
        nome: "Não tenho preferência",
      },
    ];
    const temporalidade = [
      {
        nome: "Novidade",
      },
      {
        nome: "Atemporal",
      },
      {
        nome: "Não tenho preferência",
      },
    ];
    const duracao = [
      {
        nome: "Curtas",
      },
      {
        nome: "Medianas",
      },
      {
        nome: "Longas",
      },
    ];
    const nacionalidade = [
      {
        nome: "Nacionais",
      },
      {
        nome: "Internacionais",
      },
      {
        nome: "Ambas",
      },
    ];
    const estrutura = [
      {
        nome: "Prosa",
      },
      {
        nome: "Verso",
      },
      {
        nome: "Monólogo ou diálogo",
      },
    ];
    return {
      generos,
      e1: 1,
      temporalidade,
      duracao,
      nacionalidade,
      estrutura,
      preferenciaGenero,
      preferenciaTemporalidade,
      preferenciaDuracao,
      preferenciaNacionalidade,
      preferenciaEstrutura,
      uid
    };
  },
  mounted() {
    this.uid = db.auth.currentUser.uid;
  },
  methods: {
    async save() {
      const database = getFirestore(db.app)
      
      try {
        const docRef = await addDoc(collection(database, "book_preferences"), {
          uid_user : this.uid,
          genero : this.preferenciaGenero,
          temporalidade : this.preferenciaTemporalidade,
          duracao : this.preferenciaDuracao,
          nacionalidade : this.preferenciaNacionalidade,
          estrutura : this.preferenciaEstrutura
        });
        console.log("Document written with ID: ", docRef.id,  );
        console.log(this.uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
<style >
.v-stepper__wrapper {
  padding: 0px 10px 0px 10px !important;
}
</style>