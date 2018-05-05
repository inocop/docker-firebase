<template>
  <div class="room_item">
    {{ room.createUserId }}
  </div>
</template>


<script>
export default {
  props: ['room'],
}
</script>
