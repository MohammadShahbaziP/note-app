import moment from 'moment'
import {initlize} from './views'
import { removeNote, updateNote } from './notes'



const timeElement = document.querySelector('#time')
const noteId=location.hash.substring(1)
initlize(noteId)

document.querySelector('#note-title').addEventListener('input',(e) =>{
   const note = updateNote(noteId,{
        title:e.target.value
    })
    
    
    const time1 =moment(note.updatedAt).fromNow()
    timeElement.textContent=`Last edited ${time1}`

    const time = moment().valueOf()
    note.updatedAt=time




})
document.querySelector('#note-body').addEventListener('input',(e) =>{
    const note = updateNote(noteId,{
        body:e.target.value
    })
    const time1 =moment(note.updatedAt).fromNow()
    timeElement.textContent=`Last edited ${time1}`

    const time = moment().valueOf()
    note.updatedAt=time




})
document.querySelector('#remove-btn').addEventListener('click',() =>{
    removeNote(noteId)

    location.assign('../')
})
window.addEventListener('storage',(e) =>{
    if(e.key=='notes'){
initlize(noteId)
    }
})
document.querySelector('#enter').addEventListener('click',(e)=>{
    location.assign('../')

})