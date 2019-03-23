<template>
  <div id="signin">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Sign Into Chat!</h5>
        <form @submit.prevent="enterChat">
          <label for="chatName">Enter your Name</label>
          <input type="text" name="chatName" v-model="chatName">
          <p v-if="feedback" class="text-danger">{{ feedback }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "./firebaseInit";
export default {
  name: "signin",
  data() {
    return {
      name: "",
      email: "",
      id: "",
      chatName: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.chatName) {
        this.$router.push({
          name: "chat",
          params: { chatName: this.chatName }
        });
      } else {
        this.feedback = "You must enter a name to join!";
      }
    }
  }
};
</script>

<style>
input {
  border: 1px solid black;
}
</style>
