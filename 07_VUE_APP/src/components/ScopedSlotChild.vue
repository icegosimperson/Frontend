<template lang="">
    <div>
        <slot></slot>
        <slot name="data1" :msg="data1"></slot>
        <slot name="named" :msg="data2"></slot>
    </div>
</template>
<script>
export default {
    name: 'ScopedSlotChild',
    data(){
        return{
            data1: '과연 나는 어떤 태그에 들어갈까?',
            data2: '그럼 나는??', 
        }
    }
}
</script>
<style scoped>
</style>