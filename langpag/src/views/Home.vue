<template>
  <div class="home">
  <v-carousel :show-arrows="false">
    <v-carousel-item
     src="@/assets/3.jpg"
     height="240"
    >
      <v-col cols="12">
       <v-row justify="center" align="center">
         <router-link to="/apa">apa</router-link>
          <v-btn
            depressed
            color="orange accent-2"
          >
            Primary
          </v-btn>
        </v-row>
      </v-col>
    </v-carousel-item>
    <v-carousel-item
     src="@/assets/2.jpg"
     height="240"
    ></v-carousel-item>
        <v-carousel-item
     src="@/assets/1.jpg"
     height="240"
    ></v-carousel-item>
  </v-carousel>


  <v-row>
    <v-col cols="12" md=6>
      <h1 class="text-justify ml-10" >
        Solusi Memperbaiki Rumah Anda
      </h1>
      <p class="text-align-start mx-10">
        Meyediakan jasa bangunan yang profesional & terpercaya untuk kebutuhan anda. Satu-satunya jasa tukang bangunan tanpa uang muka, survey dan konsultasi gratis dan sistem pembayaran ringan. Kami siap membantu membangun tempat tinggal impian anda!!!
      </p>
      <v-row>
        <v-col cols=5>
          <v-row justify="center" align="center">
          <v-btn
            depressed
            color="orange accent-2"
          >
            Primary
          </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md=6>
      <v-img
        src="../assets/hero-icon.png"
        height="250"
        mt-15              
        contain>
      </v-img>
    </v-col>
  </v-row>




<v-row>
    <v-col cols="6" md=3>
  <v-card
    class="mx-4 my-5"
    max-width="250"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <!-- <v-card-subtitle class="pb-5">
      Number 10
    </v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div>Tukang Spesialis Batu</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
     </v-col>
  


    <v-col cols="6" md=3>
  <v-card
    class="mx-4 my-5"
    max-width="250"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <!-- <v-card-subtitle class="pb-5">
      Number 10
    </v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div>Tukang Spesialis Batu</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
     </v-col>

      <v-col cols="6" md=3>
  <v-card
    class="mx-4 my-5"
    max-width="250"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <!-- <v-card-subtitle class="pb-5">
      Number 10
    </v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div>Tukang Spesialis Batu</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
     </v-col>

      <v-col cols="6" md=3>
  <v-card
    class="mx-4 my-5"
    max-width="250"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <!-- <v-card-subtitle class="pb-5">
      Number 10
    </v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div>Tukang Spesialis Batu</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
     </v-col>
  </v-row>



  <!-- <abot/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import abot from '@/views/About.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    // abot
  },
  data () {
     
      
    },


}
</script>
