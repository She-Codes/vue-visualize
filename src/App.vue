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
        if (this.igUrl) {
          this.igPost = await fetch(`.netlify/functions/ig-post?url=${this.igUrl}`)
          .then((r) => r.json());
        }
      }
    }
  }
</script>

