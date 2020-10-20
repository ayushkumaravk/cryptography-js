/* Import Algorithms */
let Algorithms = require('./algorithmInfo')

/* Interface for reading input */
let readlineSync = require('readline-sync')

/* Execute Algorithm */
let executeAlgorithm = (algorithm) => {
    let inputs = []
    console.log('\n:::::::::::::::::::::::::::::::::::::::::')
    console.log(algorithm['name'])
    console.log('\nPlease enter the following information : ')
    algorithm['inputLabels'].forEach((inputLabel) => {
        let inputArgument = readlineSync.question(inputLabel + ' : ')
        inputs.push(inputArgument)
    })

    console.log('\nExecuting ... ')
    console.log('---------------------')
    let outputs = algorithm['func'].apply(null, inputs)
    console.log('---------------------')
    console.log('\nResults:\n')
    algorithm['outputLabels'].forEach((outpuLabel, index) => {
        console.log(outpuLabel + ' : ' + outputs[index])
    })
    console.log('\n:::::::::::::::::::::::::::::::::::::::::')
}



console.log('\nCryptography Algorithms')
console.log('---------------------')
let exit = false
while(!exit){
    console.log('\nAvailable Algorithms :\n')
    Algorithms.forEach((algorithm, index) => {
        console.log(index + ' - ' + algorithm['name'])
    })
    console.log('\nEnter the number of the algortihm you wish to run (enter q to exit)')
    let choice = readlineSync.question('Your Choice : ')
    if(isNaN(choice)){
        exit = true
    }else{
        executeAlgorithm(Algorithms[choice])
    }
}