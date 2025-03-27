<template>
    <div>
        <h1>아아.. 집에 가고싶습니다..</h1>
        <h1>Ref Data: {{ refData.name}}</h1>
        <h1>reactiveData : {{ reactiveData.name }}</h1>
        <button v-on:click="changeRef">Ref Data 변경</button>
        <button v-on:click="changeReactive">Reactive Data 변경</button>
</div>
</template>

<script setup>
import {ref, reactive} from 'vue';
const refData = ref({name: '이혜원'});
let reactiveData = reactive({name:'이혜원'});

const changeRef = function(){
    refData.value = {name: '차은우'};
};

const changeReactive = () =>{
    reactiveData = {name: '차은우'};
};

</script>

<!--Vue2-->
<!-- <script>
export default{
    data(){
        return {
            count: 0,
            state:{
                x:0,
                y:0,
                result:0,
            }
        };
    },
};
</script> -->