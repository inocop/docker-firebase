<template>
  <section class="login-container">

    <TitleLogo/>
    <div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" placeholder="" v-model="email">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="" v-model="password">
        </div>
      </div>

      <div class="field">
        <div class="control has-text-centered">
          <button @click="login" class="button is-link">ログイン</button>
        </div>
      </div>

      <div class="field" style="margin-top:50px">
        <div class="control">
          <nuxt-link to="/create_user" class="button is-info is-fullwidth">新規登録</nuxt-link>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button @click="auth_google" class="button is-primary is-fullwidth">Google</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import TitleLogo from '~/components/TitleLogo.vue'

export default {
  name: 'login',
  layout: 'empty',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          $nuxt.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    },
    auth_google: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  },
  components: {
    TitleLogo
  },
  async mounted () {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.$router.push('/')
      }
    });
  }
}

</script>

<style scoped>

.login-container {
  margin: auto;
  width: 500px;
  padding: 100px;
}

</style>
