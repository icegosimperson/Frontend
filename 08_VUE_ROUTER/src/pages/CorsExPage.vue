<template>
    <div>
        <h1>CORS EX PAGE</h1>
    </div>
</template>

<script setup>
const CORS_URL = 'https://port-0-tetz-night-back-m5yo5gmx92cc34bc.sel4.cloudtype.app';

const PROXY_URL = '/ex-api';
async function checkCorsEx(){
    try{
        const corsExUrl = PROXY_URL;
        const corsExRes = await fetch(corsExUrl);
        const corsExData = await corsExRes.json();

        console.log('CORS 응답 결과: ', corsExData);
    } catch(e){
        alert('CORS 응답 통신 ERR 발생');
        console.log(e);
    }
}
checkCorsEx();
</script>

<style lang="scss" scoped>

</style>