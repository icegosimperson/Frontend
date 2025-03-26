<template>
    <div>
    <FancyPhotoBox>
    <template v-slot:title>
        <h1>지겨운 장동민 마멋</h1>
        </template>
    <template v-slot:photo>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw" alt="장동민마멋" />
        </template>
        </FancyPhotoBox>
        </div>
    </template>

<script>
import FancyPhotoBox from './FancyPhotoBox.vue';
export default {
  name: 'FancyPhotoBoxParent',
  components: { FancyPhotoBox },
};
</script>

<style lang="">
    
</style>