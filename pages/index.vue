<template>
  <VContent>
    <vContainer>
        <v-row>
          <v-card v-for="post in posts" :key="post.id" class="mx-auto" max-width="344" ma-5 outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{post.title}}</div>
                <v-list-item-subtitle>{{post.body}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text @click="deletePost(post.id)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
    </vContainer>
  </VContent>
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

</style>