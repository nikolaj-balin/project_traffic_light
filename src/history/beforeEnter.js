import {store} from '../store';

let beforeEnter = (to, from, next) => {

    if(to.query.filter_login){
        store.commit('set_value_filter_login', {value: to.query.filter_login});
    };

    if(to.query.filter_status){
        store.commit('set_status_value', {value: to.query.filter_status});
    };

    if(to.query.filter_order_max){
        store.commit('set_filter_order_field_max_value_s', {value: to.query.filter_order_max });
        store.commit('set_filter_order_field_max_value', {value: to.query.filter_order_max});
    };

    if(to.query.filter_order_min){
        store.commit('set_filter_order_field_min_value_s', {value: to.query.filter_order_min });
        store.commit('set_filter_order_field_min_value', {value: to.query.filter_order_min});
    };

    if(to.query.sort_name && to.query.sort_type){
        store.commit('set_sort_type', { val_sort: to.query.sort_type});
        store.commit('set_el_active_sort_par', {par_sort: to.query.sort_name});
    };

    next();
};

export default beforeEnter;