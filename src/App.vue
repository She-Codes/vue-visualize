<template>
  <div>
    <input v-model="igUrl" class="border border-indigo-400">
    <button @click="getPost">Get Post</button>

    <div>
      <img :src="postImage">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        igUrl: '',
        postImage: '',
        postName: ''
      }
    },
    methods: {
      async getPost() {
        if (this.igUrl) {
          await fetch(`.netlify/functions/ig-post?url=${this.igUrl}`)
          .then((r) => r.json())
          .then(data => {
            this.postName = data.author_name;
            this.postImage = data.thumbnail_url;
            // we need data.author_name and data.thumbnail_url
          })
          .catch(error => console.log(error));
        }
      }
    }
  }
</script>

