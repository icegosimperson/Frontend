<script setup>
import { ref } from 'vue';
import SendNameComponent from './components/SendNameComponent.vue';
const name = ref('');
</script>
<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <SendNameComponent @nameChange="nameChangeHandler" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
    };
  },
  methods:{
    nameChangeHandler(e){
      this.name = e.name;
    }
  }
};
</script>
