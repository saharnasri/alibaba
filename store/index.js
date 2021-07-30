export default {
    state() {
        return {

        }
    },
    gettur: {

    },
    mutations: {

    },
    actions: {
        getCountries({commit}, payload) {
            return this.$axios({
                url: "/all"
            })
            .then((res) => {
                return res.data
            })
            .catch((err) => {
                return false
            })
        }

    }
}