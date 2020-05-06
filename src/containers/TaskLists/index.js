import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../../actions'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-evenly  
`

const Card = styled.div`
    width: 300px;
    margin: 1em;     
    background-color: rgb(250, 236, 127);
    padding: 0 1em 3em;
    color:black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
`

const ListItem = styled.li`
    border-bottom: 1px solid black;
    margin-right: 2em;
`

export function TaskLists(props) {

    useEffect(() => {
        props.fetchTasks()
    }, [])

    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

    return (
        <Wrapper>
            {days.map(day => (
                <Card key={day}>
                    <h2>{day}</h2>
                    <ul>{
                        props.taskList.filter(
                            task => task.day === day
                        ).map(
                            task => <ListItem key={task.id}>{task.text}</ListItem>
                        )
                    }</ul>
                </Card>
            ))}
        </Wrapper>
    )

}

export default connect(

    state => ({
        taskList: state.tasks.list
    }),

    dispatch => ({
        fetchTasks: () => dispatch(fetchTasks())
    })

)(TaskLists)