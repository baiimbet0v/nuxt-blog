<template>
 <div class="container">
    <div class="post-header">
        <img :src="post.img" :alt="post.title">
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.desc}}</p>
    </div>  

    <div class="post-body">
        <p>{{ post.content }}</p>
    </div>              
</div>
    
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>