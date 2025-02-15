import {faker} from "@faker-js/faker/locale/es_MX";

const todoFake = () => ({
    text: faker.lorem.sentence({min: 1, max: 5}),
    completed: faker.datatype.boolean(),
    date: faker.date.recent({days: 10})
})

const makeTodos = (size = 5) => {
    let todosFake = []

    for (let i = 0; i < size; i += 1) {
        todosFake.push(todoFake())
    }

    return [...todosFake]
}

export {
    makeTodos
}