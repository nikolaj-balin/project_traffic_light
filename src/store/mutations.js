let mutations = {
    set_value_filter_login: function (state, {value}) {
        state.value_filter_login = value;
    },
    set_sort_type: function (state, {val_sort}) {
        state.sort_type = val_sort;
    },
    set_el_active_sort_par: function (state, {par_sort}) {
        state.el_active_sort_par = par_sort;
    },
    set_status_value: function (state, {value}) {
        state.value_filter_status = value;
    },
    set_view_status_el_body: function (state, {value}) {
        state.view_status_el_body = value;
    }
};

export default mutations;