<template>
    <tbody>
    <tr v-for="(item, key) in get_users_table_data" v-bind:key="item.place">
        <td v-for="(_item, _key) in get_sort_arr(item)" v-bind:key="_key">{{_item}}</td>
    </tr>
    </tbody>
</template>

<script>
    import {mapGetters, mapState,} from "vuex";


    export default {
        name: "UsersTbody",
        computed: {
            ...mapState([
                'users_table_data'
            ]),
            ...mapGetters([
                'get_users_table_data',
            ]),
        },
        methods: {
            get_sort_arr: function (item) {
                return this.$store.getters.get_sort_arr(item);
            }
        }


    }
</script>

<style scoped>

</style>