<template>
  <div v-if="isCreatable">
    <button class="button is-primary" @click="createRoom">Create Room!</button>
  </div>
</template>


<script>
export default {
  props: ['isCreatable'],
  methods:{
    createRoom: function () {
      this.$store.dispatch('create');
    },
  },
}
</script>
