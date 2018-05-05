<template>
<div>
  <NavBar/>
  <section class="container">
    <div>
      <p>Room List</p>

      <RoomCreateButton v-bind:isCreatable="isCreatable"></RoomCreateButton>

      <div v-if="rooms">
        <RoomLink v-for="room in rooms" v-bind:key="room.key" v-bind:room="room"></RoomLink>
      </div>

      <!--
      <app-logo/>
      <h1 class="title">
        sample-chat
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      -->

    </div>
  </section>
</div>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'
import NavBar from '~/components/NavBar.vue';
import RoomLink from '~/components/RoomLink.vue';
import RoomCreateButton from '~/components/RoomCreateButton.vue';
import RoomStore from '~/store/RoomStore';
import firebase from '~/plugins/firebase'

const store = RoomStore();
export default {
  data: function() {
    return {
      isCreatable: false,
    };
  },
  computed: {
    rooms () {
      return store.state.rooms;
    }
  },
  components: {
    NavBar,
    RoomLink,
    RoomCreateButton,
  },
  mounted: function(){
    store.dispatch('checkout');
    firebase.auth().onAuthStateChanged((user) => {
      this.isCreatable = (store.getters.getByCreateUserId(user.uid) === undefined);
    });
  }

}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
