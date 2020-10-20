/* Import Algorithms */
let Algorithms = require('./algorithmInfo')

/* Interface for reading input */
let readlineSync = require('readline-sync')

/* Execute Algorithm */
let executeAlgorithm = (algorithm) => {
    let arguments = []
    console.log('\n' + algorithm['name'])
    console.log('\nPlease enter the following information : ')
    algorithm['arguments'].forEach((argument) => {
        let inputArgument = readlineSync.question(argument + ' : ')
        arguments.push(inputArgument)
    })
    console.log('')
    let output = algorithm['func'].apply(null, arguments)
    console.log('\nResult is ' + output)
}



console.log('\nCryptography Algorithms')
console.log('\nAvailable Algorithms :\n')
Algorithms.forEach((algorithm, index) => {
    console.log(index + ' - ' + algorithm['name'])
})
console.log('\nEnter the number of the algortihm you wish to run')
let choice = readlineSync.question('Your Choice : ')
executeAlgorithm(Algorithms[choice])
