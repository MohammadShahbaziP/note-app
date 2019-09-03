import moment from 'moment'
import { getFilter } from "./filters";
import { sortBy, getNotes } from "./notes"

//generate dom element
const genrateDomElement = (item) => {
    const textEl = document.createElement('p')

    const noteEl = document.createElement('a')
    const statusEl = document.createElement('p')


    if (item.title.length > 0) {
        textEl.textContent = item.title
    } else {
        textEl.textContent = 'بدون اسم'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    statusEl.textContent = 'Last update : ' + moment(item.updatedAt).fromNow()
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)
    noteEl.classList.add('list-item')

    noteEl.setAttribute('href', `/edit.html#${item.id}`)
    return noteEl
}


//rander notes
const randerNotes = () => {
    const filter = getFilter()
    const notes = sortBy(filter.sortBy)

    const randerdNotes = notes.filter((note) => note.title.toLowerCase().includes(filter.searchText.toLowerCase()))
    document.querySelector('#notes').innerHTML = ''
    if (randerdNotes.length > 0) {
        randerdNotes.forEach((item) => {
            const noteEl = genrateDomElement(item)
            document.querySelector('#notes').appendChild(noteEl)
        })
    } else {
        const p = document.createElement('p')
        p.textContent = 'یادداشتی وجود ندارد'
        p.classList.add('empty-message')
        document.querySelector('#notes').appendChild(p)
    }




}
const initlize = (noteId) => {

    const timeElement = document.querySelector('#time')
    const notes = getNotes()

    const note = notes.find((note) => note.id === noteId)
    if (!note) {
        location.assign('../index.html')

    }
    const time = moment(note.updatedAt).fromNow()
    timeElement.textContent = `Last edited ${time}`
    document.querySelector('#note-title').value = note.title
    document.querySelector('#note-body').value = note.body

}
export { genrateDomElement, randerNotes ,initlize }