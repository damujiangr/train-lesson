// 计算属性
<template>
<div id="example">
    <h1>{{ message }}</h1>

<!-- 方法 -->
    <p>Reversed message: "{{ methodReversedMessage() }}"</p>

<!-- compute -->
    <p>Computed reversed message: "{{ computedReversedMessage }}"</p>

<!-- 侦听 -->
    <p>
        <input v-model="watchman">
    </p>
    <p>{{ watchman }}</p>
<!-- waiter -->
    <p>{{ waiter }}</p>
  </div>
</template>

<script>
export default {
  name: "TC2",
  data() {
    return {
      message: "msg",
      watchman: "",
      waiter: "waiter"
    };
  },
  methods: {
    methodReversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    computedReversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    watchman: function(newQuestion, oldQuestion) {
      console.log("changing...");
      this.waiter = 'xxx';
    }
  }
};
</script>