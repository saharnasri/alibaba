<template>
  <div>
    <v-app-bar fixed app>
        <v-container class="d-flex align-center">
            <div >
          <h3 class="text-subtitle-2 text-md-h5">{{ headerTitle }}</h3>
      </div>
      <v-spacer />
      <v-btn elevation="0" @click="modeSwitch">
        <v-icon small>mdi-moon-waning-crescent</v-icon>
        <!-- <i class="fas fa-moon"></i> -->
        <span class="text-caption text-md-subtitle-1">
          {{ darkMode }}
        </span>
        
      </v-btn>

        </v-container>
      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
        headerTitle: "Where in the world?",
        darkMode: "Dark Mode",
    };
  },
  methods: {
    modeSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
