const { add } = require('date-fns')

let data = new Date(2004,0,23)

data = add(data, {
    seconds: 2,
    days: 1,
    years: 1
})

console.log(data)