import React from "react";
import { connect } from "react-redux";
import CreationForm, { Button } from '../CreationForm'
import TaskLists from '../TaskLists'
import styled from 'styled-components'
import backgroundImage from '../../images/background.jpg'
import { fetchTasks } from "../../actions";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
  background: url(${props => props.background});
  color:white; 
`

function Planner(props) {
  const clearAllTasks = () => {
    window.localStorage.clear()
    props.fetchTasks()
  }

  return (
    <Wrapper background={backgroundImage}>
      <h1>Planejamento Semanal</h1>
      <CreationForm />
      <TaskLists />
      <Button color="darkred" onClick={clearAllTasks} >Limpar Todas</Button>
    </Wrapper>
  )

}

export default connect(
  null,
  dispatch => ({
    fetchTasks: () => dispatch(fetchTasks())
  })
)(Planner);
