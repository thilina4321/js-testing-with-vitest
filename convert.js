const {generateNumbers} = require('./cal')
const additionNumbers = (n1,n2)=> +n1 + +n2;

exports.convert = (additionNumbers)=>{
    return generateNumbers(additionNumbers) 
}
