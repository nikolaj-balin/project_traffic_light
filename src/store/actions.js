let actions = {
    on_sort_table: ({state}, {el, router}) => {

        if(state.el_active_sort && state.el_active_sort != el){
            state.el_active_sort.classList.remove('active');
            state.el_active_sort = el;
        }
        if(!state.el_active_sort){
            state.el_active_sort = el;
        }
        el.classList.add('active');
        router.push({ path: '/', query: { sort: el.dataset.parsort } })
    }
};

export default actions;