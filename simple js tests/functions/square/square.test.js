const square = require('./square.js')

beforeAll(() => {
    // вызывается перед всеми тестами
})

beforeEach(() => {
    // вызывается перед каждым тестом
})

test('should return right value', () => {
    expect(square(2)).toBe(4)
    expect(square(2)).toBeGreaterThan(3)
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toHaveBeenCalled()
    expect(spyMathPow).toBeCalledTimes(1)
    
});

afterEach(() => {
    // вызывается после каждого теста
    jest.clearAllMocks()
})

afterAll(() => {
    // вызывается после всех тестов
})