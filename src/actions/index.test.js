import { create, handleError, fetchTasks } from "./index"
import axios from 'axios'

describe("Testa actions e action creators", () => {

    test("Testa o sucesso na criação de nova tarefa", async() => {

        axios.post = jest.fn(async () => "sucesso")

        const dispatch = jest.fn()

        await create({ text: "texto", day: "dia" })(dispatch)

        expect(dispatch).toHaveBeenCalled()
    })

    test("Testa o fracasso na criação de nova tarefa", async () => {

        axios.post = jest.fn(async () => "sucesso")
        handleError = jest.fn()

        await create({})()

        expect(handleError).toHaveBeenCalled()
    })

    test("Testa a requisição das tarefas craiadas", async () => {

        const dispatch = jest.fn()

        axios.get = jest.fn(
            async () => ({
                data: ["a", "b", "c"]
            })
        )

        await fetchTasks()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(
            {
                "type": "SET_TASKS",
                "payload": {
                    "list": ["a", "b", "c"]
                }
            }
        )

    })

})