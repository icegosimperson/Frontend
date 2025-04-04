import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useMsgStore = defineStore('msg', () => {
  const msg = ref('');
  function editMsg(sendMsg) {
    msg.value = sendMsg;
  }
  return { msg, editMsg };
});