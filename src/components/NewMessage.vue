<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message:</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p v-if="feedback" class="text-danger">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "newMessage",
  props: ["chatName"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.chatName,
            timeStamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message!";
      }
    }
  }
};
</script>
