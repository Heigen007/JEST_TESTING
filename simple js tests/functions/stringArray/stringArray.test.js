const {stringArray} = require('./stringArray')

// toEqual
describe("stringArray", () => {
    test("should return an array of strings", () => {
        expect(stringArray([1,2,3])).toEqual(['1','2','3'])
    })
    test("case with null and undefined. Should return array withous those values", () => {
        expect(stringArray([1,2,3,null,undefined])).toEqual(['1','2','3'])
    })
    // using .not && .toBeGreaterThan
    test("case with empty array. Should return empty array", () => {
        expect(stringArray([]).length).not.toBeGreaterThan(0)
    })
})