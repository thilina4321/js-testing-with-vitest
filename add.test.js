const add = require('./add')

it('first test', ()=>{
    const result  = add(1,2)
    expect(result).toHaveBeenCalledTimes()
})