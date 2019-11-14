<template>
  <vContainer>
    <VFlex lg12 md6 xs12 row class="b-list">
      <v-card v-for="post in posts" :key="post.id" class="mx-auto" max-width="320" ma-5 outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{post.id}}</v-list-item-title>
            <div class="overline mb-4">{{post.title}}</div>
            <v-list-item-subtitle>{{post.body}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="deletePost(post.id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </VFlex>
  </vContainer>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$store.state.posts.posts
        
      }
    },
    mounted() {
      this.getPosts()
    },
    methods: {
      getPosts() {
        this.$store.dispatch('posts/GET_POST')
      },
      deletePost(id) {
        this.$store.dispatch('posts/DELETE_POST', id)
      }
    }
  }

</script>

<style>
  .b-list{
    justify-content: space-around;
  }
  .b-list .v-card{
    margin-bottom: 15px;
  }
</style>
