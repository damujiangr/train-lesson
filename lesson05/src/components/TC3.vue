<template>
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
  <button v-on:click="greet">Greet</button>
</div>
</template>

<script>
export default {
  name: "TC3",
  data() {
    return {
      counter: 0,
      name: 'xiaowang'
    };
  },
  methods: {
    greet: function () {
      alert('Hello ' + this.name + '!')
    }
  }
};
</script>