let getters = {
    get_header_table: (state, getters) => {
        let arr = [...state.users_table_data];
        let arr_opt_hed = ['place', 'login', 'order', 'status'];

        if(arr.length != 0){
            arr_opt_hed = Object.keys(arr[0]);
        }
        return arr_opt_hed;
    }
};

export default getters;