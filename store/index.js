import axios from 'axios'

export const state = () => ({
    postsLoaded: [],
    commentsLoaded: []
})

export const mutations = {
    setPosts(state, posts){
        state.postsLoaded = posts
    },
    addPost(state, post){
        // console.log(post)
        state.postsLoaded.push(post)
    },
    editPost(state, postEdit){
        const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
        state.postsLoaded[postIndex] = postEdit
    },
    addComment(state, comment){
        console.log(comment)
        state.commentsLoaded.push(comment)
    },
}

export const actions = {
    nuxtServerInit({commit}, contex){
        return axios.get('https://blog-nuxt-35471.firebaseio.com/posts.json')
            .then(res => {
                const postsArray = []
                for(let key in res.data){
                    postsArray.push({...res.data[key], id: key})
                }
                commit('setPosts', postsArray)
            })
            .catch(e => console.log(e))
    },
    addPost({commit}, post){
        // console.log(post)
        return axios.post('https://blog-nuxt-35471.firebaseio.com/posts.json', post)
            .then(res => {
                commit('addPost', {...post, id: res.data.name })
            })
            .catch(e => console.log(e))
    },
    editPost({commit}, post){
        return axios.put(`https://blog-nuxt-35471.firebaseio.com/posts/${post.id}.json`, post)
            .then( res => {
                commit('editPost', post)
            })
            .catch(e => console.log(e))
    },
    addComment({commit}, comment){
        return axios.post('https://blog-nuxt-35471.firebaseio.com/comments.json', comment)
            .then(res => {
                commit('addComment', {...comment, id: res.data.name })
            })
            .catch(e => console.log(e))
    }
}

export const getters = {
    getPostsLoaded(state){
        return state.postsLoaded
    }
}