import uuidv4 from 'uuid/v4'
import moment from 'moment'


let notes=[]
//get acount summery
const getNotesSummery =() =>{
    const notes =localStorage.getItem("notes")
   try{
    return !notes ? [] : JSON.parse(notes)

   }catch (e){
    return []
   }
   
}

//save notes

const saveNotes= () =>{
    localStorage.setItem('notes',JSON.stringify(notes))
}

const addNotes = ()=>{
    const id1= uuidv4()
    const time=moment().valueOf()
   notes.push({
       id:id1,
       title:'',
       body:'',
       createdAt:time   ,
       updatedAt:time
   })
   saveNotes()
  return id1
}
//remove note
const removeNote= (id) =>{
    const filterd = notes.findIndex((item) =>item.id ===id)
    notes.splice(filterd,1)
    saveNotes()
}
//sort by
const sortBy = ( sortBy) =>{

    if(sortBy=='lastEdited'){
        notes.sort(function(a,b){
            if(a.updatedAt>b.updatedAt){
                return -1
            }else if(a.updatedAt<b.updatedAt){
                return 1
            }else{
                return 0
            }
        })
    }else if(sortBy=='createdAt'){
        notes.sort(function(a,b){
            if(a.createdAt>b.createdAt){
                return -1
            }else if(a.createdAt<b.createdAt){
                return 1
            }else{
                return 0
            }
        })
    }else {
        notes.sort(function(a,b){
            if(a.title.toLowerCase()<b.title.toLowerCase()){
                return -1
            }else if(a.title.toLowerCase()>b.title.toLowerCase()){
                return 1
            }else{
                return 0
            }
        })
    }
    return notes
    
}
const updateNote =(id, updates)=>{
    const note = notes.find((note)=>note.id===id)
    if(!note){
        return
    }
    if(typeof updates.title === 'string'){
        note.title=updates.title
        note.updatedAt=moment().valueOf()
    }
    if(typeof updates.body ==='string'){
        note.body=updates.body
        note.updatedAt=moment().valueOf()
    }
    saveNotes()
    return note
}

const getNotes =() => notes
notes= getNotesSummery()

export { getNotes ,addNotes ,removeNote ,sortBy, updateNote } 