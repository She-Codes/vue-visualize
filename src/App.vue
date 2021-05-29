<template>
  <div>
    <input v-model="postUrl" class="border border-indigo-400">
    <button @click="getPost">Get Post</button>

    <div>
      <img v-for="(post, url) in posts" :key="url" :src="post.postImage">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        postUrl: '',
        posts: {}
      }
    },
    methods: {
      async getPost() {
        const vm = this;

        if (!this.postUrl) return;

        if (this.posts[this.postUrl]) {
          console.log("You've saved this before, save again?");
          // if they do save again, I can't use the same key...
          return;
        }

        if (this.postUrl) {
          try {
            const response = await fetch(`.netlify/functions/ig-post?url=${this.postUrl}`);
            const data = await response.json();
            
            console.log(data);

            vm.posts[this.postUrl] = {
              postImage: data.thumbnail_url,
              postAuthor: data.author_name
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }
</script>

