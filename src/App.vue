<template>
  <div>
    <input v-model="igUrl" class="border border-indigo-400">
    <button @click="getPost">Get Post</button>

    <div>
      {{igPost}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        igUrl: '',
        igPost: ''
      }
    },
    methods: {
      async getPost() {
        this.igPost = await fetch('.netlify/functions/ig-post').then((r) => r.json());
      }
    }
  }
</script>

