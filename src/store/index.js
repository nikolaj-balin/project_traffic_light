import Vue from 'vue';
import Vuex from 'vuex';
import mut from './mutations';
import act from './actions';
import get from './getters';

Vue.use(Vuex);

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
    },
    getters: {...get},
    mutations: {...mut},
    actions: {...act},
    modules: {}
});
