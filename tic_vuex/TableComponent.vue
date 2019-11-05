<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData" :key="index" :row-index="index"></tr-component>
  </table>
</template>
<script>
import TrComponent from './TrComponent'
export default {
  components:{
    TrComponent,
  },
  computed:{
    tableData(){
      return this.$store.state.tableData;
    },
    turnMessage(){ // ...mapGetters가 존재함
      return this.$store.getters.turnMessage
    }
  }
  // props:{
  //   tableData:Array
  // }
}
</script>
<style scoped>

</style>