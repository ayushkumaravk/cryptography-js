/* Import Algorithms */
let ceaesersCipher = require('./algorithms/caesers-cipher')


/* Array of Algorithms */
let Algorithms = [
    {name: 'Caesers Cipher', func: ceaesersCipher, inputLabels: ['Message', 'Shift'], outputLabels: ['Encrypted Message']}
]



try {
    module.exports = Algorithms
 } catch (e) {}