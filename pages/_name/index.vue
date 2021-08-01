<template>
    <div>{{name}}
        <div>
            {{details}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            name: null

        }
    },
    computed: {
        ...mapGetters({
            details: "details/country_details"
        })

    },
    mounted() {
        this.name = this.$route.params.name

    }

}
</script>