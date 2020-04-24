import React from 'react'
import renderer from 'react-test-renderer'
import { Planner } from './index'

describe("Planner", () => {

    test("Snapshot", () => {
        const tree = renderer.create(<Planner />).toJSON()

        expect(tree).toMatchSnapshot()
    })
    
})