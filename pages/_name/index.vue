<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="py-md-10">
                    <v-btn color="white" class="ps-5 pe-7"
                    @click="goBack">
                        <v-icon>mdi-arrow-left</v-icon>
                        <span>back</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" class="pe-md-14">
                    <v-img :src="details.flag" width="100%"></v-img>
                </v-col>
                <v-col cols="12" md="6" class="pt-md-10">
                    <h2 class="mb-md-6 mb-3">{{name}}</h2>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="mb-2">
                                <span class="font-weight-bold">Native Name:</span>
                                <span class="grey--text">{{details.nativeName}}</span>
                            </p>
                            <p class="mb-2">
                                <span class="font-weight-bold">Population:</span>
                                <span class="grey--text">{{details.population}}</span>
                            </p>
                            <p class="mb-2">
                                <span class="font-weight-bold">Region:</span>
                                <span class="grey--text">{{details.region}}</span>
                            </p>
                            <p class="mb-2">
                                <span class="font-weight-bold">Sub Region:</span>
                                <span class="grey--text">{{details.subregion}}</span>
                            </p>
                            <p class="mb-2">
                                <span class="font-weight-bold">Capital:</span>
                                <span class="grey--text">{{details.capital}}</span>
                            </p>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="mb-2">
                                <span class="font-weight-bold">Top Level Domain:</span>
                                <span class="grey--text">{{details.capital}}</span>
                            </p>
                            <p class="mb-2">
                                <span class="font-weight-bold">Currencies:</span>
                                <span v-for="(item, index) in details.currencies" :key="index" 
                                class="grey--text">
                                {{item.name}}
                                <span v-if="index != details.currencies.length-1">,</span>
                                </span>
                            </p>
                            <p class="mb-2">
                                <span class="font-weight-bold">Languages:</span>
                                <span v-for="(item, index) in details.languages" :key="index" 
                                class="grey--text">
                                {{item.name}}
                                <span v-if="index != details.languages.length-1">,</span>
                                </span>
                            </p>
                        </v-col>
                    </v-row>
                    <div v-if="details.borders && details.borders.length>0">
                        <span class="font-weight-bold me-2">Border Countries:</span>
                        <v-btn 
                        v-for="(item, index) in details.borders" :key="index" 
                        color="white" 
                        class="mx-1"
                        small min-width="70">
                            {{item}}

                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        
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

    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

}
</script>