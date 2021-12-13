import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#434C6D',
          secondary: '#E8E5AE',
          anchor: '#8c9eff',
        },
      },
    },
  })

export default new Vuetify({
    vuetify
});
