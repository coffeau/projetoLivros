<template>
  <v-container fluid>
    <table id="tabela"></table>
  </v-container>
</template>

<script>
import main from './main.js'

export default {
    mounted:{
        table(){
            main.main()
        }
    }
}
</script>

<style>

</style>