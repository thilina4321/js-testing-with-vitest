const add = (numbers = [])=>{
    let sum = 0
    numbers.forEach(number => {
        sum += number
    });
    return sum
}

module.exports = add