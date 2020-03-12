let actions = {
    on_sort_table: ({state}, {el, router, route}) => {

        let par_sort = el.dataset.parsort;
        let query = route.query;

        if( state.el_active_sort_par != par_sort){

            state.el_active_sort_par = par_sort;
            state.sort_type = 'ASC';
            router.push({ path: '/', query: { ...query, sort_name: par_sort, sort_type: 'ASC' } });

        } else if(state.el_active_sort_par == par_sort){

            switch (state.sort_type) {
                case 'ASC':
                    router.push({ path: '/', query: { ...query,  sort_type: 'DESC' } });
                    state.sort_type = 'DESC';
                    break;
                case 'DESC':
                    router.push({ path: '/', query: { ...query, sort_name: 'none', sort_type: 'none' } });
                    state.sort_type = 'none';
                    state.el_active_sort_par = 'none';
                    break;
                default:
                    break;

            }

        }



    }
};

export default actions;