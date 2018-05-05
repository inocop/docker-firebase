<template>
<div>
<h1>{{id}}</h1>
</div>
</template>

<script>
export default {
}
</script>
<template>
<div>
  <NavBar/>
  <section class="container">
    <div>
      <p>Chat Room</p>

      <ul>
        <Message v-for="talk in talks" v-bind:key="talk.key" v-bind:talk="talk"></Message>
      </ul>

      <MessageInputer />
    </div>
  </section>
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Message from '~/components/Message.vue';
import MessageInputer from '~/components/MessagInputer.vue';
import TalkStore from '~/store/TalkStore';

const store = TalkStore();
export default {
  validate ({ params }) {
    // @todo: I want to validate using RoomSotre but why can not.
    // return (roomStore.getters.getByCreateUserId(params.id) !== undefined);
    return (params.id !== undefined);
  },
  store,
  computed: {
    talks () {
      return this.$store.state.talks;
    }
  },
  components: {
    NavBar,
    Message,
    MessageInputer,
  },
  mounted: function(){
    this.$store.dispatch('checkout', this.$route.params.id);
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
