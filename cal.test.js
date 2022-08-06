const {convert} = require('./convert')

describe("generateNumbers()", ()=>{
    it("should convert string numbers to numbers and add those", ()=>{
        const convertToNumbers = vi.fn()
        convert(convertToNumbers)
        expect(convertToNumbers).toBeCalled()
    })
})