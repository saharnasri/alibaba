<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-text-field
            solo
            v-model="searchInput"
            label="Search for a country"
            prepend-inner-icon="mdi-magnify"
            @input="searchCountry"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="8" class="">
          <div class="d-flex justify-start justify-md-end">
            <div class="filterInput">
              <v-select
                :items="region"
                v-model="selectedRegion"
                label="Filter by Region"
                solo
                @change="filterByRegion"
              ></v-select>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" v-for="(item, index) in countries" :key="index">
          <div>
            <v-card 
            class="mx-auto" 
            max-width="344" 
            min-height="380"
            @click="showDetails(item)"
            >
              <v-img :src="item.flag" height="200px"></v-img>

              <v-card-title class="mb-2">
                {{ item.name }}
              </v-card-title>

              <v-card-subtitle>
                <div>
                  <span class="font-weight-bold">Population: </span>
                  <span>{{ item.population }}</span>
                </div>
                <div>
                  <span class="font-weight-bold">Region: </span>
                  <span>{{ item.region }}</span>
                </div>
                <div>
                  <span class="font-weight-bold">Capital: </span>
                  <span>{{ item.capital }}</span>
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
      searchInput: "",
      region: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      selectedRegion: "",
      countries: []
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      this.$store.dispatch("getCountries").then(res => {
        this.countries = res;
      });
    },
    searchCountry() {
      if (this.searchInput.length > 0) {
        this.$store.dispatch("searchCountry", this.searchInput).then(res => {
          this.countries = res;
        });
      } else {
        this.getCountries();
      }
    },
    filterByRegion() {
      this.$store.dispatch("filterByRegion", this.selectedRegion).then(res => {
        this.countries = res;
      });
    },
    showDetails(item) {
      this.$store.commit('details/SET_SELECTED_COUNTRY', item);
      this.$router.push(`/${item.name}`);
    }
  }
};
</script>

<style>
.filterInput {
  width: 200px;
}
</style>
