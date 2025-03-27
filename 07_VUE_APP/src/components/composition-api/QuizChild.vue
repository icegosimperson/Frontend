<template>
    <div>
      <input type="text" v-model.number="inputNum" />
      <button @click="sendNum">정답!</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, watch } from 'vue';
  
  const cnt = ref(0);
  const inputNum = ref(0);
  
  const props = defineProps({
    num: {
      type: Number,
      required: true,
    },
  });
  
  const emit = defineEmits(['send-msg']);
  const sendNum = () => {
    if (inputNum.value < props.num) {
        emit('send-msg', 'UP');
    }
    else if (inputNum.value > props.num) {
        emit('send-msg', 'DOWN');
    }
    else emit('send-msg', '정답입니다.');
    cnt.value++;
  };
  
  watch(cnt, function (newValue) {
    if (newValue === 3) {
        return alert('3번째 시도입니다.');
    }
  });
</script>
  
<style lang="scss" scoped>
</style>