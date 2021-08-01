export default {
    state() {
        return {

        }
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        getCountries({commit}, payload) {
            return this.$axios({
                url: "/all"
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return false;
            })
        },
        searchCountry({commit}, payload) {
            return this.$axios({
                url: `/name/${payload}`
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return false;
            })

        },
        filterByRegion({commit}, payload) {
            return this.$axios({
                url: `/region/${payload}`
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return false;
            })
        },

    }
}