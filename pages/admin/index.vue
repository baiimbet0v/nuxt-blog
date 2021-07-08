<template>
  <div class="wrapper-content wrapper-content--fixed">
    <PostsList :admin=true :posts="postsLoaded"/>
  </div>
</template>

<script>

export default {
  layout: 'admin',  
  computed: {
    postsLoaded(){
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>