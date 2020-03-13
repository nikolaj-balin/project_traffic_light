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
    }
};

export default actions;