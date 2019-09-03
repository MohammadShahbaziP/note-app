import { addNotes } from './notes'
import {  setFilter} from './filters'
import { randerNotes} from './views'


randerNotes()
document.querySelector('#createNote').addEventListener('click',() =>{
    const id1 = addNotes()
   
    location.assign(`../edit.html#${id1}`)


})
document.querySelector('#searchBox').addEventListener('input',(e)=>{

    setFilter({
        searchText:e.target.value
    })
    randerNotes()
})
window.addEventListener('storage',(e)=>{
    if(e.key=='notes'){

        randerNotes()

        
    }
})
document.querySelector('#filteredBy').addEventListener('change',(e)=>{
    setFilter({
        sortBy:e.target.value
    })
   randerNotes()



})
