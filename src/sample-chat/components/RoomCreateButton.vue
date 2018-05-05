<template>
  <div v-if="isCreatable">
    <button @click="createRoom">Create Room!</button>
  </div>
</template>


<script>
import RoomStore from '~/store/RoomStore';

export default {
  props: ['isCreatable'],
  methods:{
    createRoom: () => {
      RoomStore().dispatch('create');
    },
  },
}
</script>
