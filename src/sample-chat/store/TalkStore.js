import firebase from '~/plugins/firebase'
const database = firebase.database();
const talksRef = database.ref('/talks');
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    talks: [],
    talkKey: '',
  },
  strict: true,
  mutations: {
    setTalkKey(state, talkKey) {
      state.talkKey = talkKey;
    },
    push(state, data) {
      state.talks.push(data);
    },
    clean(state) {
      state.talks = [];
    }
  },
  actions: {
    firebaseStoreDataPush({commit}, data) {
      commit('push', {
        key: data.key,
        talkKey: data.val().talkKey,
        createUserId: data.val().createUserId,
        createUserName: data.val().createUserName,
        message: data.val().message,
        createdAt: data.val().createdAt
      });
    },
    checkout({commit, dispatch, state}, talkKey) {
      commit('clean');
      state.talkKey && talksRef.child(state.talkKey).off();

      const talkRef = talksRef.child(talkKey);
      commit('setTalkKey', talkKey);

      talkRef.once('value').then(snapshot => {
        snapshot.forEach(data => {
          dispatch('firebaseStoreDataPush', data);
        });
      });

      talkRef.on('child_added', data => {
        dispatch('firebaseStoreDataPush', data);
      });
    },
    create({state}, message) {
      const user = firebase.auth().currentUser;

      talksRef.child(state.talkKey).push({
        talkKey: state.talkKey,
        createUserId: user.uid,
        createUserName: user.displayName,
        createAt: new Date().getTime(),
        message: message,
      });
    }
  }
});
