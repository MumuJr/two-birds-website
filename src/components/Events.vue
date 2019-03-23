<template>
  <div id="events">
    <div class="container">
      <h3 class="title">Two Birds Events!</h3>
      <ul class="list-group">
        <li class="event-li list-group-item my-2" v-for="events in event" v-bind:key="events.id">
          {{ events.name }}
          <router-link
            class="btn btn-primary"
            v-bind:to="{name: 'viewevent', params: {event_id: events.event_id}}"
          >Info</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "events",
  data() {
    return {
      event: []
    };
  },
  created() {
    db.collection("events")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            event_id: doc.data().event_id,
            name: doc.data().event_name,
            start: doc.data().event_start,
            end: doc.data().event_end,
            website: doc.data().event_web,
            location: doc.data().event_location,
            map: doc.data().map
          };
          this.event.push(data);
          console.log(data);
        });
      });
  }
};
</script>

<style>
.event-li {
  display: flex;
  justify-content: space-between;
}
</style>
