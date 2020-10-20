/* Import Algorithms */
let ceaesersCipher = require('./algorithms/caesers-cipher')


/* Array of Algorithms */
let Algorithms = [
    {name: 'Caesers Cipher', func: ceaesersCipher, arguments: ['Message', 'Shift']}
]



try {
    module.exports = Algorithms
 } catch (e) {}