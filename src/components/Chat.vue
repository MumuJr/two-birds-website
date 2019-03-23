<template>
  <div id="chat">
    <div class="chat card container">
      <div class="card-body">
        <h5 class="card-title text-center">Two Birds Chat</h5>
        <ul class="messages list-group" v-chat-scroll>
          <li v-for="message in messages" :key="message.id" class="list-group-flush my-2">
            <span class="card-text text-capitalize text-primary">{{ message.name }}:</span>
            <span class="card-text text-wrap text-secondary">{{ message.content }}</span>
            <span class="card-text text-secondary time">{{ message.timestamp }}</span>
          </li>
        </ul>
        <div class="card-body">
          <NewMessage :chatName="chatName"/>
        </div>
      </div>
    </div>
    <router-link to="/events" class="btn btn-primary">Sign Out</router-link>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import firebase from "firebase";
import db from "./firebaseInit";
import moment from "moment";

export default {
  name: "chat",
  props: ["chatName"],
  components: {
    NewMessage
  },
  data() {
    return {
      name: "",
      email: "",
      id: "",
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timeStamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timeStamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style>
.chat h5 {
  font-size: 2.6 em;
  margin-bottom: 2%;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages ::-webkit-scrollbar {
  width: 3px;
}
.messages ::-webkit-scrollbar-track {
  background: #ddd;
}
.messages ::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
