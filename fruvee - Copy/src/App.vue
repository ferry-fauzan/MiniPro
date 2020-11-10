<template>
  <v-app>
    <v-app-bar
      app
      color="#FFEB3B"
      dark
    >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
        <v-img 
        src="@/assets/logos.png"
        width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Home</span>
        <span class="mr-2">Product</span>
        <span class="mr-2">Contact Us</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

      <p>{{$store.state.numb}}</p>
      <button @click="addNumbs">click</button>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <Home/>
    </v-main>

   <template>
  <v-footer
    color="#FFEB3B"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
     <v-btn

        color="white"
        text
        rounded
        class="my-2"
      >
      <v-list-item-icon class="ml-7">
            <v-icon class="mx-2">mdi-facebook</v-icon>
            <v-icon class="mx-2">mdi-twitter</v-icon>
            <v-icon class="mx-2">mdi-linkedin</v-icon>
            <v-icon class="mx-2">mdi-instagram</v-icon>
          </v-list-item-icon>
      </v-btn>
      <v-col
        class="yellow accent-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Home
  },

  data: () => ({
    links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    //
  }),
  methods:{
    addNumbs(){
      this.$store.commit('addNumb')
    }
  }
};
</script>
