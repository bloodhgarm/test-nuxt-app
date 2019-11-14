export const state = () => ({
    posts: []
});
export const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload
    }
    
    
};
export const getters = {
    GET_POST: state => state.posts
};

export const actions = {
    GET_POST({ commit }) {
        return this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('SET_POSTS', response)
            })
            .catch(error => console.log(error))
    },
    DELETE_POST({ commit, state }, id){
       this.$axios.$delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => {
                const posts = state.posts.slice()
                posts.forEach(e => {
                    if (e.id == id) {
                        const index = posts.indexOf(e)
                        if (index < 0) {
                            return
                        }
                        posts.splice(index, 1)
                        commit('SET_POSTS', posts)
                        
                        return 
                    }
                }); 
            })
            .catch(error => console.log(error))
            
    }
}