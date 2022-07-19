<template>
  <div>
    {{ message }}
    <h1>ハロー</h1>
    <v-btn @click="sample">ボタン</v-btn>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    sample: function () {
      this.flashMessage.show({
        status: 'error',
        title: 'Error Message Title',
        message: 'Oh, you broke my heart! Shame on you!'
      });
    }
  },
  mounted() {
    this.sample()
  }
}
</script>

<style scoped>
</style>
