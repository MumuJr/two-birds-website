<template>
  <div id="viewevent">
    <div class="titles">
      <h3>Two Birds Events!</h3>
      <router-link class="btn btn-primary" to="/events">Back</router-link>
    </div>
    <ul class="event-list container list-group">
      <li class="list-group-item my-2">{{event_name}}</li>
      <li class="list-group-item my-2">{{event_start}} - {{event_end}}</li>
      <li class="list-group-item my-2">{{event_location}}</li>
      <li class="list-group-item my-2">
        <a class="btn btn-outline-primary" :href="event_web">Website</a>
      </li>
      <li class="list-group-item my-2">
        <iframe :src="map" frameborder="0" style="border:0" allowfullscreen></iframe>
      </li>
    </ul>
    <div class="container chat-button">
      <router-link class="btn btn-primary" to="/signin">Chat</router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "./firebaseInit";
export default {
  name: "viewevent",
  data() {
    return {
      event_id: null,
      event_name: null,
      event_start: null,
      event_end: null,
      event_web: null,
      event_location: null,
      map: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("events")
      .where("event_id", "==", to.params.event_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            (vm.event_id = doc.data().event_id),
              (vm.event_name = doc.data().event_name),
              (vm.event_start = doc.data().event_start),
              (vm.event_end = doc.data().event_end),
              (vm.event_web = doc.data().event_web),
              (vm.event_location = doc.data().event_location),
              (vm.map = doc.data().map);
          });
        });
      });
  },
  created() {
    this.initFirebaseAuth();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("events")
        .where("event_id", "==", this.$route.params.event_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.event_id = doc.data().event_id;
            this.event_name = doc.data().event_name;
            this.event_start = doc.data().event_start;
            this.event_end = doc.data().event_end;
            this.event_web = doc.data().event_web;
            this.event_location = doc.data().event_location;
            this.map = doc.data().map;
          });
        });
    },
    initFirebaseAuth() {
      // Listen to auth state changes.
      firebase.auth().onAuthStateChanged(user => {
        // console.log(user);
        name = user.displayName;
      });
    },
    onAuthStateChanged(user) {
      // We ignore token refresh events.
      if (user && currentUID === user.uid) {
        return;
      }
    },
    signIn() {
      // Sign into Firebase using popup auth & Google as the identity provider.
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.

          var user = result.user;

          // ...
        })
        .then(user => {
          this.$router.push({ name: "signIn" });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });

      userInfo();
    },
    userInfo() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });
    },
    signOut() {
      firebase.auth().signOut();
    }
  }
};
</script>


<style scoped>
.titles {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
}
.list-group-item {
  text-align: center;
}
.chat-button {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
}
</style>
