import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import { CreationForm, Form, Input } from './index'

describe("Testes do formulário", () => {
    
    test("Snapshot", () => {

        const tree = renderer
            .create(<CreationForm/>)
            .toJSON()

        expect(tree).toMatchSnapshot()

    })

    test("Deve chamar a funcao handleSubmission ao clicar no botão", () => {
        
        const handleSubmission = jest.fn()
        const component = shallow(<Form  onSubmit={handleSubmission}/> )
                
        component.simulate("submit")

		expect(handleSubmission).toHaveBeenCalledTimes(1)
    })  

    test("Deve chamar a funcao setTask ao digitar uma nova tarefa", () => {
        
        const setTask = jest.fn()
        const component = shallow(<Form ><Input onChange={setTask}/></Form> )
        const input = component.find(Input)
               
        input.simulate("change")

		expect(setTask).toHaveBeenCalledTimes(1)
    })  

})