export default {
    state() {
        return {
            // selectedCountry: process.server ? '' : JSON.parse(localStorage.getItem('selectedCountry')),
            selectedCountry: ''
     }
    },
    getters: {
        country_details: (state) => state.selectedCountry
    },
    mutations: {
        SET_SELECTED_COUNTRY(state, payload) {
            state.selectedCountry = payload;
            // localStorage.setItem('selectedCountry', JSON.stringify(payload));
        }
    },
    actions: {
        
    }
}