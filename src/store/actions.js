let actions = {
    on_sort_table: ({state, commit}, {el, router, route}) => {

        let par_sort = el.dataset.parsort;
        let query = route.query;

        if( state.el_active_sort_par != par_sort){
            commit('set_el_active_sort_par', {par_sort});
            commit('set_sort_type', { val_sort: 'ASC'});
            router.push({ path: '/', query: { ...query, sort_name: par_sort, sort_type: 'ASC' } });

        } else if(state.el_active_sort_par == par_sort){

            switch (state.sort_type) {
                case 'ASC':
                    commit('set_sort_type', { val_sort: 'DESC'});
                    router.push({ path: '/', query: { ...query,  sort_type: 'DESC' } });
                    break;
                case 'DESC':
                    commit('set_sort_type', { val_sort: 'none'});
                    commit('set_el_active_sort_par', {par_sort: 'none'});
                    router.push({ path: '/', query: { ...query, sort_name: 'none', sort_type: 'none' } });
                    break;
                default:
                    break;
            }
        }

    },
    set_value_filter_login: function ({state, commit}, {value, router, route}) {
        let query = route.query;

        commit('set_value_filter_login', {value});
        router.push({ path: '/', query: { ...query, filter_login: value } });
    },
    set_status_value: function ({state, commit}, {event, router, route }) {
        let query = route.query;
        let status = event.currentTarget.dataset.status;
        if(status != state.value_filter_status){
            commit('set_status_value', {value: status});
            commit('set_view_status_el_body', {value: false});
            router.push({ path: '/', query: { ...query, filter_status: status } });
        } else {
            commit('set_view_status_el_body', {value: false});
        }

    },
    set_view_status_el_body: function ({state, commit}) {
        commit('set_view_status_el_body', {value: !state.view_status_el_body});
    },
    set_filter_order_field_min_value: function ({state, commit}, {value, router, route}) {
        let query = route.query;

        commit('set_filter_order_field_min_value', {value});
    },
    set_filter_order_field_max_value: function ({state, commit}, {value, router, route}) {
        let query = route.query;

        commit('set_filter_order_field_max_value', {value});
    },
    order_filter_view: function ({state, commit, getters}, { router, route }) {
        let query = route.query;
        let filter_order_field_min_value = +state.filter_order_field_min_value;
        let filter_order_field_max_value = +state.filter_order_field_max_value;
        let min = +getters.get_order_min;
        let max = +getters.get_order_max;

        if( filter_order_field_max_value > max || filter_order_field_max_value < min){
            commit('set_filter_order_field_max_value_s', {value: max });
            commit('set_filter_order_field_max_value', {value: ''});
        } else {
            commit('set_filter_order_field_max_value_s', {value: filter_order_field_max_value});
        };

        if(filter_order_field_min_value <= max && filter_order_field_min_value >= min){
            if(filter_order_field_min_value <= state.filter_order_field_max_value_s){
                commit('set_filter_order_field_min_value_s', {value: filter_order_field_min_value});
            } else {
                commit('set_filter_order_field_min_value_s', {value: min});
                commit('set_filter_order_field_min_value', {value: ''});
            }
        } else {
            commit('set_filter_order_field_min_value_s', {value: min});
            commit('set_filter_order_field_min_value', {value: ''});
        };

        if(query.filter_order_min != state.filter_order_field_min_value_s ||  query.filter_order_max != state.filter_order_field_max_value_s){
            router.push({
                path: '/', query: { ...query, filter_order_max: state.filter_order_field_max_value_s, filter_order_min: state.filter_order_field_min_value_s }
            });
        }

    }
};

export default actions;