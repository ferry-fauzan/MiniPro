<template>
  <v-app>
    <v-app-bar
      app
      color="#FFAB40"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logos.png"
          transition="scale-transition"
          width="140"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        link
        to="/"
      >
        <span class="mr-2">Home</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-btn
        tag="a"
        text
        href="#service"
      >
        <span class="mr-2">Our Services</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
         <v-btn
        text
        link
        to="/about"
      >
        <span class="mr-2">Contact Us</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <!-- <Home/> -->
      <!-- <v-container fluid> -->
      <router-view/>
      <!-- </v-container> -->
    </v-main>
    <!-- <About/> -->
   <v-footer id="service"
    color="orange accent-3"
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
        class="orange accent-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Tukangku</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Home from '@/views/Home';
// import About from '@/views/About';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // Home,
    // About
},

  data: () => ({
    //
     links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  }),
  // mounted(){
  //   this.$router.push({name: "Apa"})
  // }
};
</script>
