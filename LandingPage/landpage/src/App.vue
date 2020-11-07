<template>
  <v-toolbar
    color="#FFA726"
    
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <!-- <v-divider
      class="mx-15"
      vertical
    ></v-divider> -->

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        Home
      </v-btn>

      <!-- <v-divider vertical></v-divider> -->

      <v-btn text>
        Product
      </v-btn>

      <!-- <v-divider vertical></v-divider> -->

      <v-btn text>
        Contact
      </v-btn>

      
      <v-btn text>
        Contact
      </v-btn>

      <!-- <v-divider vertical></v-divider> -->
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
  <v-main>
    <img src="assets/logo.png" alt="" >

  </v-main>
</template>

<script>

export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
