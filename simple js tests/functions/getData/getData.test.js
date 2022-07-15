const getData = require('./getData.js');
const axios = require('axios');

jest.mock('axios');

describe('getData', () => {
    var response = {
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
                {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }
        ]
    }
    axios.get.mockReturnValue(response)

    test("Should return value", async () => {
        var res = await getData()
        expect(res).not.toBe(false)
    })

    test("response is an array", async () => {
        var res = await getData()
        expect(res).toBeInstanceOf(Array)
    })

    test("function works", async () => {
        var res = await getData()
        expect(res.length).toBe(2)
        expect(res).toMatchSnapshot()
    })
})
