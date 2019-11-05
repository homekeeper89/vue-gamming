<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
export default{
  props:{
    cellData:String,
    cellIndex:Number,
    rowIndex:Number,
  },
  methods:{
    onClickTd(){
      if(this.cellData) return;
    }
  }
}
</script>