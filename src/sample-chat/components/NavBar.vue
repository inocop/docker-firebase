<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/fire.png" alt="Fire-Chat" width="30" height="30">
      </a>
      <a class="navbar-item navbar-title" href="/">
        Fire-Chat
      </a>

      <div class="navbar-burger burger" data-target="navMenuColorlight">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColorlight" class="navbar-menu">
      <div class="navbar-end">
        <div v-if="isLogin" class="navbar-item">
          Hello! {{ currentUser.displayName }}
        </div>
        <div class="navbar-item">
          <button @click="logout" class="button">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-title{
  font-size:24px;
  font-weight: 300;
  color: #35495e;
}

</style>


<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      isLogin: false,
      currentUser: null,
    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(function() {
        // $nuxt.$router.push('/login')
      }).catch(function(error) {
        // An error happened.
        alert(error.message);
      });
    }
  },
  created: function(){
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
  },
  mounted: function(){
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }
}
</script>
