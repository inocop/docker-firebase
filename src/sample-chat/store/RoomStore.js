import firebase from '~/plugins/firebase'
const database = firebase.database();
const roomsRef = database.ref('/rooms');
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    rooms: [],
  },
  strict: true,
  mutations: {
    push(state, room) {
      state.rooms.push(room);
    },
    clean(state) {
      state.rooms = [];
    }
  },
  getters: {
    getByCreateUserId: (state) => (id) => {
      return state.rooms.find(room => room.createUserId === id);
    }
  },
  actions: {
    checkout({commit}) {
      commit('clean');
      roomsRef.once('value').then(snapshot => {
        snapshot.forEach(data => {
          commit('push', {
            key: data.key,
            createUserId: data.val().createUserId,
            createUserName: data.val().createUserName,
          });
        });
      });
    },
    create({dispatch, getters}) {
      const user = firebase.auth().currentUser;

      const row = getters.getByCreateUserId(user.uid);
      if (row) {
        return;
      }

      roomsRef.push({
        createUserId: user.uid,
        createUserName: user.displayName,
        createAt: new Date().getTime(),
      }).then((res) => {
        dispatch('checkout');
      });
    }
  }
});
