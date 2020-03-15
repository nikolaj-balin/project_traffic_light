<template>
    <div class="panel_filter">
        <div class="filter_login">
            <input type="search" v-model="value_filter_login" />
        </div>
        <div class="filter_status">
            <div class="filter_status_label"
                 v-bind:class="{active: value_filter_status.length != 0, show: view_status_el_body}"
                 v-on:click="set_view_status_el_body"
            >
                {{value_filter_status.length == 0 ? 'Выберите статус' : value_filter_status}}
            </div>
            <div class="filter_status_body" v-bind:class="{show: view_status_el_body}">
                <div v-for="(item, key) in get_status_unic_arr"
                     class="filter_status_row"
                     v-bind:data-status="item"
                     v-bind:class="{active: value_filter_status == item}"
                     v-on:click="set_status_value"
                >
                    {{item}}
                </div>
                <div class="filter_status_row reset"
                     v-bind:data-status="''"
                     v-on:click="set_status_value"
                >
                    Сбросить фильтр
                </div>
            </div>
        </div>
        <div class="filter_order">
                от
                <input type="number"
                       class="filter_order_field_min"
                       v-bind:placeholder="get_order_min"
                       v-model.trim="filter_order_field_min_value"
                       v-on:keyup.enter.prevent="order_filter_view"
                >
                до
                <input type="number"
                       class="filter_order_field_max"
                       v-bind:placeholder="get_order_max"
                       v-model.trim="filter_order_field_max_value"
                       v-on:keyup.enter.prevent="order_filter_view"
                >
            <div class="filter_order_blind"></div>
            <div class="button_views_order"
                 v-on:click="order_filter_view"
            >Показать</div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from "vuex";

    export default {
        name: "PanelFilter",
        computed: {
            ...mapState([ 'value_filter_login', 'value_filter_status', 'view_status_el_body',]),
            ...mapGetters(['get_status_unic_arr', 'get_order_min', 'get_order_max']),
            value_filter_login: {
                get: function() {
                    return this.$store.state.value_filter_login;
                },
                set: function(value){
                    this.$store.dispatch('set_value_filter_login', {
                        value, router: this.$router, route: this.$route
                    });
                }
            },
            filter_order_field_min_value: {
                get: function() {
                    return this.$store.state.filter_order_field_min_value;
                },
                set: function(value){
                    this.$store.dispatch('set_filter_order_field_min_value', {
                        value, router: this.$router, route: this.$route
                    });
                }
            },
            filter_order_field_max_value: {
                get: function() {
                    return this.$store.state.filter_order_field_max_value;
                },
                set: function(value){
                    this.$store.dispatch('set_filter_order_field_max_value', {
                        value, router: this.$router, route: this.$route
                    });
                }
            }
        },
        methods: {
            ...mapActions ( [
                'set_filter_login', 'set_view_status_el_body',
            ]),
            set_status_value: function (event) {
                this.$store.dispatch('set_status_value', { event, router: this.$router, route: this.$route})
            },
            order_filter_view: function (event) {
                this.$store.dispatch('order_filter_view', { event, router: this.$router, route: this.$route})
            }
        },

    }
</script>

<style scoped>
    input[type='number'] {
        -moz-appearance:textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

</style>