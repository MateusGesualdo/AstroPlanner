import React from 'react'
import renderer from 'react-test-renderer'
import App from "./containers/App"

test("App Snapshot", () => {

    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()

})

