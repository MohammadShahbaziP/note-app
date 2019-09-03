const filter = {
    searchText :'',
    sortBy:''
}
const getFilter= ()=>filter

const setFilter= (updates)=>{
    if(typeof updates.searchText==='string'){
        filter.searchText=updates.searchText
    }
    if (typeof updates.sortBy === 'string'){
        filter.sortBy=updates.sortBy
    }
}
export {getFilter, setFilter}