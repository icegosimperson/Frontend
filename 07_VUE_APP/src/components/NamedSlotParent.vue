<template>
    <NamedSlotChild>
        <template v-slot:top>
          <h2>여기는 top 슬롯으로 보내는 html입니다</h2>
        </template>
        <template v-slot:bottom>
          <h2>여기는 bottom 슬롯으로 보내는 html입니다</h2>
        </template>
    </NamedSlotChild>
  </template>
<script>
  import NamedSlotChild from './NamedSlotChild.vue';
export default {
    name: 'NamedSlotParent',
    components: {NamedSlotChild}, 
}
</script>
<style lang="">
    
</style>