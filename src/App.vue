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
          return;
        }

        if (this.postUrl) {
          await fetch(`.netlify/functions/ig-post?url=${this.postUrl}`)
          .then((r) => r.json())
          .then(data => {
            console.log(data);
  
            vm.posts[this.postUrl] = {
              postImage: data.thumbnail_url,
              postAuthor: data.author_name
            }
          })
          .catch(error => console.log(error));
        }
      }
    }
  }
</script>

