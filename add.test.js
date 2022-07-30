const add = require('./add')

describe('add()', ()=>{
    it('calculate the sum of numbers array', ()=>{
        // arrange
        const numbers = [1,2,3,45,5]
        const expectedResult = numbers.reduce((prev, curr)=> prev + curr, 0 )
    
        // act
        const result  = add(numbers)
    
        // assert
        expect(result).toBe(expectedResult)
    })
    
    it('should return NAN if the arguments are contain strings', ()=>{
        // arrange
        const numbers = [1,'invalid']
        const expectedResult = numbers.reduce((prev, curr)=> prev + curr, 0)
    
        // act
        const result = add(numbers)
    
        // assert
        expect(result).toBeNaN()
    })
    
    it('should not throw an error when not passing the array as argument', ()=>{
        // act
        const resultFn = ()=>{
            add()
        }
    
        // assert
        expect(resultFn).not.toThrow()
    })
})
