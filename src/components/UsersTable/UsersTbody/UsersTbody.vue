<template>
    <tbody>
        <tr v-for="(item, key) in users_table_data" v-bind:key="item.place">
            <td v-for="(_item, _key) in item" v-bind:key="_key">{{_item}}</td>
        </tr>
    </tbody>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "UsersTbody",
        computed: mapState([
            'users_table_data'
        ]),


    }
</script>

<style scoped>

</style>