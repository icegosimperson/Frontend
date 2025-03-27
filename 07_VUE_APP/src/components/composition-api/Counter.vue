<template>
    <div>
        <h1>Counter</h1>
        <h1>Count:{{ count }}</h1>
        <h1>두배로: {{ double }}</h1>
        <button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
        <h1>지금까지 계산한 횟수: {{ cnt }}</h1>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const count = ref(0);
const double = computed(() => count.value *2);
let cnt = ref(0);
function increment(){
    console.log("그냥 double : ", double);
    console.log("그냥 double의 value ", double.value);
    count.value++;
    cnt.value++;
};

function decrement(){
    console.log("지금까지 계산한 횟수: ", cnt)
    count.value--;
    cnt.value++;
};

watch(count, function(newValue, oldValue){
    console.log(`카운트가 ${oldValue}에서 ${newValue}로 변경되었습니다`);
    if(newValue % 10===0 && newValue!==0) return alert('축하합니다!');
});
</script>

<style lang="scss" scoped>

</style>