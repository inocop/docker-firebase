<template>
  <div class="messageCard">
    <span class="messageCard__author">{{ talk.createUserName }}</span>
    <div class="messageCard__text">
      {{talk.message}}
    </div>
    <span class="messageCard__createAt">
      {{talk.createAt}}
    </span>
  </div>
</template>


<script>
export default {
  props: ['talk'],
}
</script>

<style>
.messageCard {
  border: 1px solid #DDD;
  border-radius: 5px;
  overflow: hidden;
}
.messageCard__author {
  background-color: #DDD;
  border-radius: 5px;
}
.messageCard__text {
  display: block;
  width: 100%;
}
.messageCard__createAt {
  float: right;
  position: relative;
  padding-left: 10px;
}
.messageCard__createAt:before {
  border: 1px solid #000;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0px;
  context: '';
}
.messageCard__createAt:after {
  context: '';
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  position: absolute;
  left: 0px;
  top: 2px;
  width: 5px;
  height: 3px;
}
</style>
