export const state = () => ({
    posts: []
});
export const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload
    }
    
    
};
export const actions = {
    GET_POST({ commit }) {
        return this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('SET_POSTS', response)
            })
            .catch(json => console.log(json))
    },
    DELETE_POST({ commit, state }, id){
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
    }
}