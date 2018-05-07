<template>
<div>
  <NavBar v-bind:is-login="isLogin" v-bind:current-user="currentUser"/>

  <section class="container">
    <h1 class="subtitle">Room List</h1>
    <RoomCreateButton class="create-button" v-bind:is-creatable="isCreatable"></RoomCreateButton>
  </section>

  <section class="container">
    <div>
      <div v-if="rooms">
        <RoomLink v-for="room in rooms" v-bind:key="room.key" v-bind:room="room"></RoomLink>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import RoomLink from '~/components/RoomLink.vue';
import RoomCreateButton from '~/components/RoomCreateButton.vue';
import RoomStore from '~/store/RoomStore';
import firebase from '~/plugins/firebase'

const store = RoomStore();
export default {
  data(){
    return{
      isLogin: false,
      currentUser: null
    }
  },
  computed: {
    rooms () {
      return this.$store.state.rooms;
    },
    isCreatable() {
      const user = firebase.auth().currentUser;
      return (user && ! this.$store.getters.getByCreateUserId(user.uid));
    }
  },
  store,
  components: {
    NavBar,
    RoomLink,
    RoomCreateButton,
  },
  mounted: function(){
    const self = this

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        self.isLogin = true
        self.currentUser = user
      } else {
        self.$router.push('/login')
      }
    });
    
    this.$store.dispatch('checkout');
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.create-button {
  margin-left: 30px;
  margin-top: 10px;
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
  margin-bottom: 0;
}

.links {
  padding-top: 15px;
}
</style>
