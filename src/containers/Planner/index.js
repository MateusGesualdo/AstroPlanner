import React from "react";
import { connect } from "react-redux";
import CreationForm from '../CreationForm'
import TaskLists from '../TaskLists'
import styled from 'styled-components'
import backgroundImage from '../../images/background.jpg'

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

export class Planner extends React.Component {
  render() {
    return (
      <Wrapper background={backgroundImage}>
        <h1>Planejamento Semanal</h1>
        <CreationForm/>      
        <TaskLists/>
      </Wrapper>
    )
  }
}

export default connect()(Planner);
