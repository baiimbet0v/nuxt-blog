<template>
    <section class="new-comment">
        <div class="container">

            <Message v-if="message" :message="message"/>


            <form @submit.prevent="onSubmit" class="contact-form">
                <AppInput v-model="comment.name" >Name:</AppInput>
                <AppTextArea v-model="comment.text">Text:</AppTextArea> 

                <div class="controls">
                    <AppButton >Submit</AppButton>
                </div>               
            </form>

            
        </div>
    </section>
</template>  

<script>
import Message from '@/components/UI/Message.vue'
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

export default {
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data(){
        return{
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('addComment', {
                postId: this.postId,
                publish: true,
                ...this.comment
            })
                .then(()=> {
                    this.message = 'Submited!'

                    this.comment.name = ''
                    this.comment.text = ''
                })
                .catch(e => {console.log(e)})
            

        }
    }
}
</script>

<style lang="scss">
.new-comment{
    text-align: center;
    
    .contact-form{
        max-width: 600px;
        margin: 30px auto;
    }
    .controls{
        margin: 30px 0;
    }
}
</style>