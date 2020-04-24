import axios from 'axios'

export function handleError () { 
    alert("Ocorreu um erro, tente novamente") 
}

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-mateus'

const setTasks = list => ({
    type: "SET_TASKS",
    payload: { list }
})

export const fetchTasks = () => (dispatch) => {
 
    axios.get(
        baseUrl
    ).then(
        response => dispatch(setTasks(response.data))
    ).catch(
        () => handleError()
    )
}

export const create = (newTask) => (dispatch) => {
    axios.post(
        baseUrl,
        {
            text: newTask.text,
            day: newTask.day
        }
    ).then(
        () => {
            alert("Tarefa Criada!")
            dispatch(fetchTasks())
        }
    ).catch(
        () => handleError()
    )
}