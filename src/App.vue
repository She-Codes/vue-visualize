<template>
  <div>
<<<<<<< HEAD
    <header>
      <input v-model="postUrl" class="border border-indigo-400">
      <button @click="getPost">Get Post</button>
    </header>

    <main>
      <img v-for="(post, url) in posts" :key="url" :src="post.postImage">
    </main>
=======
    <input v-model="postUrl" class="border border-indigo-400">
    <button @click="getPost">Get Post</button>

    <div>
      <img v-for="(post, url) in posts" :key="url" :src="post.postImage">
    </div>
>>>>>>> 6cb72782e4ff0a33f25805192d0dad37055d48a6
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
<<<<<<< HEAD
          console.log("You've already captured this vision!");
=======
          console.log("You've saved this before, save again?");
          // if they do save again, I can't use the same key...
>>>>>>> 6cb72782e4ff0a33f25805192d0dad37055d48a6
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

