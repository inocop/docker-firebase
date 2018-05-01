<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/fire.png" alt="Fire-Chat" width="30" height="30">
      </a>
      <div class="navbar-burger burger" data-target="navMenuColorlight">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColorlight" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <button @click="logout" class="button">Logout</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    logout: function(){
      firebase.auth().signOut().then(function() {
        $nuxt.$router.push('/login')
      }).catch(function(error) {
        // An error happened.
        alert(error.message);
      });
    }
  },
  created: function(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        $nuxt.$router.push('/login')
      }
    });
  },
}
</script>
