// constructor(direct = true, reverse = false) {
//     this.direct = direct;
//     this.reverse = reverse;
//     // this.keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
//     //   "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
//     // ];
//     this.keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// }

let keys_ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encrypt(message, key) {

    if (!message || !key) {
        throw new Error("Incorrect arguments!");
    }

    // let keys = keys_;
    message = message.toUpperCase();
    key = key.toUpperCase();
    const messageLenght = message.length;
    let keyLenght = key.length;
    // const keysLenght = message.length;
    if (keyLenght < messageLenght) {
        key = key.repeat(Math.ceil(messageLenght / keyLenght));
    }
    // if (26 < messageLenght) {
    //     keys = keys_.repeat(Math.ceil(messageLenght / 26)+1);
    // }

    let result = '';

    const arrayKeys = keys_.split('');

    keyLenght = key.length;
    // console.log(message, key, messageLenght, keyLenght, arrayKeys);

    let j = 0; // index for arrayKeys
    for (let i = 0; i < messageLenght; i += 1) {
        // console.log(key[i]);
        const indexKey = arrayKeys.indexOf(key[j]);
        // console.log(indexKey);
        const indexMessage = arrayKeys.indexOf(message[i]);
        // console.log(indexMessage);

        if (indexMessage === -1) {
            result += message[i];
            continue;
        }

        const shiftIndex = indexMessage + indexKey;
        // console.log(shiftIndex);
        if (shiftIndex < 26) {
            result += arrayKeys[shiftIndex];
            j += 1;
            // console.log(arrayKeys[shiftIndex]);
            continue;
        }

        const shiftIndexDivision = shiftIndex % 26;
        console.log(shiftIndex, shiftIndexDivision, arrayKeys[shiftIndexDivision]);
        result += arrayKeys[shiftIndexDivision];
        j += 1;


    }


    console.log(result.split('').reverse().join(''));
    // ovnlqbpvt hznzouz
}


function decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
        throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const messageLenght = encryptedMessage.length;
    let keyLenght = key.length;
    // const keysLenght = message.length;
    if (keyLenght < messageLenght) {
        key = key.repeat(Math.ceil(messageLenght / keyLenght));
    }


    let result = '';

    const arrayKeys = keys_.split('');

    keyLenght = key.length;
    // console.log(message, key, messageLenght, keyLenght, arrayKeys);

    let j = 0; // index for arrayKeys
    for (let i = 0; i < messageLenght; i += 1) {
        // console.log(key[i]);
        const indexKey = arrayKeys.indexOf(key[j]);
        // console.log(indexKey);
        const indexMessage = arrayKeys.indexOf(encryptedMessage[i]);
        // console.log(indexMessage);

        if (indexMessage === -1) {
            result += encryptedMessage[i];
            continue;
        }

        const shiftIndex = indexMessage - indexKey;
        // console.log(shiftIndex);
        if (shiftIndex < 26 && shiftIndex > -1) {
            result += arrayKeys[shiftIndex];
            j += 1;
            // console.log(arrayKeys[shiftIndex]);
            continue;
        }

        // const shiftIndexDivision = shiftIndex % 26;
        const shiftIndexDivision = 26 + shiftIndex;
        console.log(shiftIndex, shiftIndexDivision, arrayKeys[shiftIndexDivision]);
        result += arrayKeys[shiftIndexDivision];
        j += 1;


    }


    // console.log(result.split('').reverse().join(''));
    console.log(result);
}

// encrypt('attacking tonight', 'OCULORHINOLARINGOLOGY');
// encrypt('attack at dawn!', 'alphonse');

decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js');
// (directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)');