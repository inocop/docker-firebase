<template>
  <div>
    <div v-if="errorMessage" class="errorMessage">{{ errorMessage }}</div>
    <textarea v-model="message" maxlength="200" required="required"></textarea>
    <button @click="send">送信</button>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      message: '',
      errorMessage: '',
    }
  },
  methods: {
    send: function(){
      if (!this.message) {
        this.errorMessage = 'Please input message';
        return;
      }

      this.$store.dispatch('create', this.message);
      this.message = '';
      this.errorMessage = '';
    }
  },
}
</script>

<style>
.errorMessage {
  color: #F00;
}
</style>
