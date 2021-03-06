import Vue from 'vue';
import Vuex from 'vuex';
import mut from './mutations';
import act from './actions';
import get from './getters';
import translate_ru from './translate_ru';

Vue.use(Vuex);

const myPlugin = store => {
    // вызывается после инициализации хранилища
    store.commit('set_filter_order_field_min_value_s', {value: store.getters.get_order_min});
    store.commit('set_filter_order_field_max_value_s', {value: store.getters.get_order_max});
    // store.subscribe((mutation, state) => {
    //     // вызывается после каждой мутации
    //     // мутация передаётся в формате `{ type, payload }`.
    // });
};



export const store = new Vuex.Store({
    state: {
        users_table_data: [
            {
                place: 1, login: 'smith@gmail.com', order: 312, status: 'Ценитель красоты',
            },
            {
                place: 2, login: 'lenin@gmail.com', order: 120, status: 'Поставщик аксессуаров',
            },
            {
                place: 3, login: 'mask@gmail.com', order: 98, status: 'Конкурент минздрава',
            },
            {
                place: 4, login: 'dog@mail.ru', order: 64, status: 'охотник',
            },
            {
                place: 5, login: 'nightmare@mail.ru', order: 34, status: 'рыбак',
            },
            {
                place: 6, login: 'cat@mail.ru', order: 1, status: 'Ценитель красоты',
            },
        ],
        translate_ru,
        el_active_sort_par: 'none',
        sort_type: 'none',
        value_filter_login: '',
        value_filter_status: '',
        view_status_el_body: false,
        filter_order_field_min_value: '',
        filter_order_field_max_value: '',
        filter_order_field_max_value_s: '',
        filter_order_field_min_value_s: '',

    },
    plugins: [myPlugin],
    getters: {...get},
    mutations: {...mut},
    actions: {...act},
    modules: {},
});
