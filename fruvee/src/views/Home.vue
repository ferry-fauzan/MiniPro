<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-carousel
    cycle
    height="530"
   
    
  >
    <v-carousel-item
     src="../assets/1N.jpg"
     
    >
      <!-- <v-sheet
       
        height="100%"
      > -->
        <v-row
         
          align="center"
          justify="center"
        >
          <!-- <div class="display-3">
            {{ slide }} Slide
          </div> -->
        </v-row>
      <!-- </v-sheet> -->
    </v-carousel-item>

    <v-carousel-item
     src="../assets/2N.jpg"
     
    >
      <!-- <v-sheet
       
        height="100%"
      > -->
        <v-row
         
          align="center"
          justify="center"
        >
          <!-- <div class="display-3">
            {{ slide }} Slide
          </div> -->
        </v-row>
      <!-- </v-sheet> -->
    </v-carousel-item>

    <v-carousel-item
     src="../assets/3N.jpg"
    >
      <!-- <v-sheet
       
        height="100%"
      > -->
        <v-row
         
          align="center"
          justify="center"
        >
          <!-- <div class="display-3">
            {{ slide }} Slide
          </div> -->
        </v-row>
      <!-- </v-sheet> -->
    </v-carousel-item>
  </v-carousel>

    <v-row>
      <v-col cols="12" md="6" class="my-10">
        <h1 class="text-justify mt-5 mx-5">Fruvee</h1>
        <p class="text-justify my-2 mx-5">Fruvee adalah layanan penjualan buah dan sayuran yang menghubungkan antara penjual dan pembeli secara langsung. Dengan Fruvee cara kita dengan mudah untuk mendapatkan akses hidup sehat. Fruvee cara mudah hidup sehat dengan hanya sekali klik!!!</p>
      </v-col>
      <v-col cols="12" md="6" class="my-10">
         <v-img
        src="../assets/hero-icon.png"
        height="250"
                      
        contain>
      </v-img>
      </v-col>
    </v-row>
<v-row>
  <v-col cols="12" class="my-5 mx-5">
<h1>Beli Buah atau Sayur?</h1>
      <p>Mau beli buah dan sayur tanpa ribet? Pake aja Fruvee buah dan sayur datang dan kamu cuma dirumah</p>
  </v-col>
</v-row>

  <v-row>
    <v-col cols="12" md="6">
 <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/var1.jpg"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">
      Vegetables
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Kind of vegetables</div>

    </v-card-text>

    <v-card-actions class="pb-0">
      <v-btn
        color="orange"
        text
      >
        Beli Disini
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>

    <v-col cols="12" md="6">
 <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/var2.jpg"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">
      Fruits
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Kind of fruits</div>

    </v-card-text>

    <v-card-actions class="pb-0">
      <v-btn
        color="orange"
        text
      >
        Beli Disini
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data:()=>{
    return{
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
           {
            src: '../assets/1N.jpg',
          },
          {
            src: '../assets/2N.jpg',
          },
        ],
    }
  },
  methods:{


  }
}
</script>
