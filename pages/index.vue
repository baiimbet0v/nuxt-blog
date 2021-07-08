<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts: "/>
    <PostsList :posts="postsLoaded"/>
    <contacts />
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default {
  components: {
    promo,
    contacts
  },
  computed: {
    postsLoaded(){
      return this.$store.getters.getPostsLoaded
    }
  }
  // asyncData(contex){
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       resolve({
  //         posts : [
  //           {
  //             id: 1,
  //             title: '1 post',
  //             descr: 'Central Asian Shepherd dog Alabai',
  //             img: 'https://foxbaltimore.com/resources/media/69f6539c-72ef-4443-82fb-df04592f459e-large16x9_GettyImages1124551251.jpg?1588191434615'
  //           }
  //         ]
  //       })
  //     }, 1500)
  //   })
  //     .then(data => {
  //       return data
  //     })
  //     .catch( e => {
  //       contex.error(e)
  //     })
  // }, 
  
}
</script>

