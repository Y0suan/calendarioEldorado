import {saveEvent} from './firebase.js'

document.addEventListener('DOMContentLoaded',console.log('anda'))


const taskForm = document.getElementById('formulario-event')

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const titulo = taskForm['titulo']
    const detalles = taskForm['detalles']

    saveEvent(titulo.value , detalles.value)
})