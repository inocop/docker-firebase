<template>
  <div class="room_item">
    <router-link :to="{ name: 'rooms-id', params: { id: room.key }}">go to {{ room.createUserName }} Room</router-link>
  </div>
</template>

<script>
export default {
  props: ['room'],
}
</script>
