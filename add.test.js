const add = require('./add')

it('calculate the sum of numbers array', ()=>{
    // arrange
    const numbers = [1,2,3,45,5]
    const expectedResult = numbers.reduce((prev, curr)=> prev + curr, 0 )

    // act
    const result  = add(numbers)

    // assert
    expect(result).toBe(expectedResult)
})