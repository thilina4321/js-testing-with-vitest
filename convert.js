const {generateNumbers} = require('./cal')
const additionNumbers = (n1,n2)=> +n1 + +n2;

exports.convert = (additionNumbers)=>{
    return generateNumbers(additionNumbers) 
}

// this is greate as i can edit them here
