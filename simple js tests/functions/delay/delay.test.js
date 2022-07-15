const delay = require('./delay.js')

describe('delay', () => {
    test("delay works", async () => {
        var res = await delay(() => 5+5,1000)
        expect(res).toBe(10)
    })
})