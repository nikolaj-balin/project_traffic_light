<template>
    <tr>
        <th v-for="(item, key) in get_header_table"
            v-bind:key="item"
            v-on:click="on_sort_table"
            v-bind:data-parsort="item"
        >
            {{translate_ru[item]}}
        </th>
    </tr>
</template>

<script>
    import {mapGetters, mapState, mapActions} from "vuex";
    export default {
        name: "UsersThead",
        computed: {
            ...mapGetters([
                'get_header_table',
            ]),
            ...mapState([
                         'translate_ru'
                     ]),
        },
        methods: {
            ...mapActions ( [

            ]),
            on_sort_table(e) {
                this.$store.dispatch('on_sort_table', {
                    el: e.currentTarget, router: this.$router
                })
            }


        },
        beforeRouteUpdate (to, from, next) {
            console.log('to', to);
            console.log('from', from);
            next();
        },
    }
</script>

<style scoped>

</style>