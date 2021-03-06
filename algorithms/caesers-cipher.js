let ceaesersCipher = (message, shift) => {

    let outputs = []

    let cipherText = ''

    let i
    for(i = 0; i < message.length; i ++){
        let messageCharCode = message.charCodeAt(i)
        let cipherCharCode = messageCharCode + parseInt(shift)
        /* Capital Letter */
        if(messageCharCode >= 65 && messageCharCode <= 90){
            if(cipherCharCode < 65){
                cipherCharCode = cipherCharCode + 26
            }else if(cipherCharCode > 90){
                cipherCharCode = cipherCharCode - 26
            }
            cipherText = cipherText + String.fromCharCode(cipherCharCode)
        }else if(messageCharCode >= 97 && messageCharCode <= 122){
            if(cipherCharCode < 97){
                cipherCharCode = cipherCharCode + 26
            }else if(cipherCharCode > 122){
                cipherCharCode = cipherCharCode - 26
            }
            cipherText = cipherText + String.fromCharCode(cipherCharCode)
        }else{
            outputs[0] = 'Error: Invalid Characters in String'
            return outputs
        }
        console.log(message.charAt(i) + ' with code ' + messageCharCode + ' has become ' + String.fromCharCode(cipherCharCode) + ' with code ' + cipherCharCode)
    }
    
    outputs[0] = cipherText

    return outputs
}

try {
    module.exports = ceaesersCipher
 } catch (e) {}