import { tasks } from './index'

test("Teste do reducer", () => {

    const initialState = { list: [] }
    const action = {
        type: "SET_TASKS",
        payload: { list: ['t', 'e', 's', 't', 'e'] }

    }
    const newState = tasks(initialState, action)

    expect(newState).toBe({ list: ['t', 'e', 's', 't', 'e'] })
})