export default {
    state() {
        return {
            selectedCountry: {},

        }
    },
    getters: {
        country_details: (state) => state.selectedCountry
    },
    mutations: {
        SET_SELECTED_COUNTRY(state, payload) {
            state.selectedCountry = payload;
        }
    },
    actions: {
        
    }
}