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
    }
};

export default getters;