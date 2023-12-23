const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    // this.reverse = reverse;
    this.keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {

    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const messageLenght = message.length;
    let keyLenght = key.length,
      result = '';

    if (keyLenght < messageLenght) {
      key = key.repeat(Math.ceil(messageLenght / keyLenght));
    }

    const arrayKeys = this.keys.split('');

    keyLenght = key.length;

    let j = 0; // index for arrayKeys
    for (let i = 0; i < messageLenght; i += 1) {
      const indexKey = arrayKeys.indexOf(key[j]);
      const indexMessage = arrayKeys.indexOf(message[i]);

      if (indexMessage === -1) {
        result += message[i];
        continue;
      }

      const shiftIndex = indexMessage + indexKey;
      if (shiftIndex < 26) {
        result += arrayKeys[shiftIndex];
        j += 1;
        continue;
      }

      const shiftIndexDivision = shiftIndex % 26;
      result += arrayKeys[shiftIndexDivision];
      j += 1;
    }


    if (this.direct) {
      return result;
    }

    return result.split('').reverse().join('');

  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const messageLenght = encryptedMessage.length;
    let keyLenght = key.length,
      result = '';

    if (keyLenght < messageLenght) {
      key = key.repeat(Math.ceil(messageLenght / keyLenght));
    }

    const arrayKeys = this.keys.split('');

    keyLenght = key.length;

    let j = 0; // index for arrayKeys
    for (let i = 0; i < messageLenght; i += 1) {
      const indexKey = arrayKeys.indexOf(key[j]);
      const indexMessage = arrayKeys.indexOf(encryptedMessage[i]);

      if (indexMessage === -1) {
        result += encryptedMessage[i];
        continue;
      }

      const shiftIndex = (26 + this.keys.indexOf(encryptedMessage[i]) - this.keys.indexOf(key[j])) % 26;
      result += arrayKeys[shiftIndex];
      j += 1;
    }

    if (this.direct) {
      return result;
    }

    return result.split('').reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};