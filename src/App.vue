<template>
  <div>
    <input v-model="igUrl" class="border border-indigo-400">
    <button @click="getPost">Get Post</button>

    <div>
      {{igPost}}
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
  let igUrl = '';
  let igPost = '';

  const getPost = async () => {
    igPost = await fetch('.netlify/functions/ig-post').then((r) => r.json());
  }
</script>

