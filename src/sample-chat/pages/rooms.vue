<template>
  <section class="container">

    <div class="columns" v-if="isLoaded">
      <TheUserInfo class="column is-narrow is-3" />
      <TheTimeLine class="column is-narrow is-9" />
    </div>
    <div class="loading-wrapper" v-else>
      <div class="loading"></div>
    </div>

  </section>
</template>

<script>
import auth from '~/plugins/auth'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
  },
  async mounted () {
    if (process.browser) {
      let user
      if (!this.user) user = await auth()
      await Promise.all([
        this.user ? Promise.resolve() : this.$store.dispatch('SET_CREDENTIAL', { user: user || null }),
        this.posts.length ? Promise.resolve() : this.$store.dispatch('INIT_POSTS'),
        this.users.length ? Promise.resolve() : this.$store.dispatch('INIT_USERS')
      ])
      this.isLoaded = true
    }
  },
  computed: {
    ...mapGetters(['user', 'users', 'posts'])
  }
}
</script>

<style scope>
</style>
