<template>
    <div>
      <SlotChild>
        <h1>슬롯 테스트!</h1>
        <!-- <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCNs_VJdmZA2kobD3MLM1cU39GzEOzp1v-g&s"
          alt="최고심"
        /> -->
        <h1>테스트2</h1>
        <input type="text" />
        <button>닫기</button>
        <button>닫지 마요 ㅠㅠ</button>
      </SlotChild>
    </div>
  </template>
<script>
import SlotChild from './SlotChild.vue';
export default {
    name: 'SlotParent',
    components: {SlotChild}, 
}
</script>
<style lang="">
    
</style>