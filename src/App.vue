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
          try {
            const response = await fetch(`api/ig-post?url=${this.igUrl}`);
            const data = await response.json();
            this.postName = data.author_name;
            this.postImage = data.thumbnail_url;
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }
</script>

