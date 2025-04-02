<script setup>
const obj = {
  name: '이혜원',
  isOld: false,
};

localStorage.setItem("hyeniObj", JSON.stringify(obj));
const getObj = JSON.parse(localStorage.getItem('hyeniObj'));
console.log(localStorage);
console.log(getObj.name);
</script>

<template>
  <div>
    <h1>HOME</h1>
  </div>
</template>
