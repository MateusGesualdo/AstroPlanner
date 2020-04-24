import React, {useEffect} from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import { TaskLists } from './index'

describe("Tasklists", () => {

    test("Snapshot", () => {
        
        const list = [{
            day: "Segunda",
            text: "text"
        }]
        const tree = renderer.create(<TaskLists taskList={list}/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test("Deve buscar as tarefas no backend", () => {
        const fetchTasks = jest.fn()
        const list = [{
            day: "day",
            text: "text"
        }]
        const component = shallow(<TaskLists taskList={list} fetchTasks={fetchTasks}/> )

        component.simulate('load')

        expect(fetchTasks).toHaveBeenCalled()
    })

})