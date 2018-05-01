<template>
  <section class="login-container">

    <TitleLogo/>

    <div>

      <p>新規登録</p>

      <div class="field">
        <label class="label">UserName</label>
        <div class="control">
          <input class="input" type="text" placeholder="" v-model="username">
        </div>
      </div>

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

      <div class="field" style="margin-top:50px">
        <div class="control">
          <button @click="create_user" class="button is-info is-fullwidth">登録</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import TitleLogo from '~/components/TitleLogo.vue'

export default {
  name: 'create_user',
  layout: 'empty',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    create_user: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          alert('Create account: ', user.email)
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    },

  },
  components: {
    TitleLogo
  }
}
</script>

<style scope>

.login-container {
  margin: auto;
  margin-top: 50px;
  width: 500px;
  padding: 100px;
}

</style>
