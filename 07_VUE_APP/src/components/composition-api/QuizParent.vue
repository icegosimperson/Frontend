<template>
    <div>
      <h1>{{ msg }}</h1>
      <QuizChild :num="num" @send-msg="emitHandler" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import QuizChild from './QuizChild.vue';
  
  const num = ref(parseInt(Math.random() * 21));
  const msg = ref('랜덤 숫자를 맞춰주세요!');
  
  function emitHandler(value) {
    msg.value = value;
  }
  </script>
  
  <style lang="scss" scoped></style>