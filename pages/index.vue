<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-text-field
        solo
            label="Search for a country"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
      </v-col>
      <v-col cols="12" md="8" class="">
        <div class="d-flex justify-end">
          <div class="filterInput">
            <v-select
          :items="items"
          label="Filter by Region"
          solo
          
        ></v-select>

          </div>
          

        </div>
         
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3"
      v-for="(item, index) in countries" :key="index">
      <div>
        <v-card
    class="mx-auto pb-6"
    max-width="344"
  >
    <v-img
      :src="item.flag"
      height="200px"
    ></v-img>

    <v-card-title class="mb-2">
      {{item.name}}
    </v-card-title>

    <v-card-subtitle>
      <div>
        <span class="font-weight-bold">Population: </span>
      <span>{{item.population}}</span>

      </div>
      <div>
        <span class="font-weight-bold">Region: </span>
      <span>{{item.region}}</span>

      </div>
      <div>
        <span class="font-weight-bold">Capital: </span>
      <span>{{item.capital}}</span>

      </div>
      
      
    </v-card-subtitle>

  </v-card>

      </div>
        
      </v-col>
    </v-row>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Africa', 'America'],
      // countries: [
      //   {name:'Iran'},
      //   {name: 'Canada'},
      //   {name:'Iran'},
      //   {name: 'Canada'},
      //   {name:'Iran'},
      //   {name: 'Canada'},
      //   {name:'Iran'},
      //   {name: 'Canada'},
      // ],
      countries: []
    }
  },
  mounted() {
    this.getCountries()

  },
  methods: {
    getCountries() {
      this.$store.dispatch('getCountries')
      .then((res) => {
        console.log("rick and morty", res);
        this.countries = res
      })

    }
  },
}
</script>

<style>
.filterInput{
  width: 200px;
}
</style>