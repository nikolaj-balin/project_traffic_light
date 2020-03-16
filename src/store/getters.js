let getters = {
    get_header_table: (state, getters) => {
        let arr = [...state.users_table_data];
        let arr_opt_hed = ['place', 'login', 'order', 'status'];

        if(arr.length != 0){
            arr_opt_hed = Object.keys(arr[0]);
        }
        return arr_opt_hed;
    },
    get_users_table_data: (state, getters) => {
        let arr = [...state.users_table_data];
        let el_active_sort_par = state.el_active_sort_par;
        let sort_type = state.sort_type;
        let value_filter_login = state.value_filter_login;
        let value_filter_status = state.value_filter_status;
        let filter_order_field_max_value_s = state.filter_order_field_max_value_s;
        let filter_order_field_min_value_s = state.filter_order_field_min_value_s;

        arr = arr.filter((value) => { return new RegExp(value_filter_login).test(value.login) });
        arr = arr.filter((value) => { return new RegExp(value_filter_status).test(value.status) });
        arr = arr.filter((value) => { return value.order <= +filter_order_field_max_value_s && value.order >= +filter_order_field_min_value_s });

        switch (sort_type) {
            case 'ASC':
                arr = arr.sort(
                    (a, b) => {
                        if(a[el_active_sort_par] > b[el_active_sort_par]){
                            return 1;
                        } else if(a[el_active_sort_par] < b[el_active_sort_par]) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                );
                break;
            case 'DESC':
                arr = arr.sort(
                    (a, b) => {
                        if(a[el_active_sort_par] > b[el_active_sort_par]){
                            return -1;
                        } else if(a[el_active_sort_par] < b[el_active_sort_par]) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                );
                break;
            default:
                break;
        }
        return arr;
    },
    get_status_unic_arr: function (state, getters) {
        let arr = [ ...state.users_table_data];
        arr = Array.from(new Set(arr.map((item) => item.status)));
        arr = arr.sort((a, b) => {
            return a > b ? 1 : -1;
        });
        return arr;
    },
    get_order_min: function (state, getters) {

        let arr = [ ...state.users_table_data];
        let min = arr.reduce((accumulator, currentValue) => Math.min( accumulator, currentValue.order ), arr[0].order);
        return min;
    },
    get_order_max: function (state, getters) {

        let arr = [ ...state.users_table_data];
        let max = arr.reduce((accumulator, currentValue) => Math.max( accumulator, currentValue.order ), arr[0].order);
        return max;
    },
    get_sort_arr: (state, getters)  => item => {
        let get_header_table = getters.get_header_table;
        let arr = [];

        get_header_table.forEach((i) => arr.push(item[i]));
        return arr;
    },
    succes_filter_order_blind: function(state, getters){
        let order_min = getters.get_order_min;
        let order_max = getters.get_order_max;
        let filter_order_field_max_value = state.filter_order_field_max_value;
        let filter_order_field_max_value_s = state.filter_order_field_max_value_s;
        let filter_order_field_min_value = state.filter_order_field_min_value;
        let filter_order_field_min_value_s = state.filter_order_field_min_value_s;
        let max_n = +filter_order_field_max_value_s != +order_max;
        let min_n = +filter_order_field_min_value_s != +order_min;
        let max_v = +filter_order_field_max_value_s != +filter_order_field_max_value;
        let min_v = +filter_order_field_min_value_s != +filter_order_field_min_value;

        if(filter_order_field_max_value.length == 0 && max_n){
            return true;
        }else if( filter_order_field_min_value.length == 0 && min_n){
            return true;
        }else if(filter_order_field_max_value.length != 0 && max_v){
            return true;
        }else if( filter_order_field_min_value.length != 0 && min_v){
            return true;
        }
    }
};

export default getters;