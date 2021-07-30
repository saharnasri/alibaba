<template>
  <div>
    <v-app-bar fixed app>
        <v-container class="d-flex align-center">
            <div >
          <h3>{{ headerTitle }}</h3>
      </div>
      <v-spacer />
      <v-btn elevation="0" @click="modeSwitch">
        <v-icon>mdi-moon-waning-crescent</v-icon>
        <!-- <i class="fas fa-moon"></i> -->
        {{ darkMode }}
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
