<template>
    <tr>
        <th v-for="(item, key) in get_header_table"
            v-bind:key="item"
            v-on:click="on_sort_table"
            v-bind:data-parsort="item"
            v-bind:class="[{ active:  item == el_active_sort_par}, sort_type]"
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
                         'translate_ru', 'el_active_sort_par', 'sort_type'
                     ]),
        },
        methods: {
            ...mapActions ( [

            ]),
            on_sort_table(e) {
                this.$store.dispatch('on_sort_table', {
                    el: e.currentTarget, router: this.$router, route: this.$route
                })
            }


        },
    }
</script>

<style scoped>

</style>