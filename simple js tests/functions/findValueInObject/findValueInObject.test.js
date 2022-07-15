const {findValueInObject} = require('./findValueInObject')

const exampleObject = {
    name: "Heigen007",
    age: 17,
    friends: ["Heigen007", "Heigen008", "Heigen009"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        owners: [
            "mam",
            "dad"
        ]
    }
}

// toBe
describe("findValueInObject", () => {
    test("Функция \"находит\" поле в объекте на первом уровне вложенности", () => {
        expect(findValueInObject(exampleObject, "Heigen007")).toBe(true)
    })
    
    test("Функция \"находит\" поле в объекте на втором уровне вложенности", () => {
        expect(findValueInObject(exampleObject, "123 Main St")).toBe(true)
    })
    
    test("Функция \"находит\" поле в массиве", () => {
        expect(findValueInObject(exampleObject, "dad")).toBe(true)
    })
    
    test("Функция \"не находит\" поле в объекте", () => {
        expect(findValueInObject(exampleObject, "HelloWorld")).toBe(false)
    })
})