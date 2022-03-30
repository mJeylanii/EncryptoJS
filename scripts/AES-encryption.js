//Encryption in AES-GCM
const msg = ...; // arbitrary length of message in Uint8Array
const key = ...; // 16 bytes or 32 bytes key in Uint8Array
const iv = ...; // 12 bytes IV in Uint8Array for AES-GCM mode
const additionalData = ...; // optional AAD
aes.encrypt(msg, key, {name: 'AES-GCM', iv, additionalData, tagLength: 16}).then( (encrypted) => {
    // now you get an Uint8Array of encrypted message
});
//Decryption in AES-GCM
const data = ...; // encryted message in Uint8Array
const key = ...; // 16 bytes or 32 bytes key in Uint8Array
const iv = ...; // 12 bytes IV in Uint8Array for AES-GCM mode that is exactly same as the one used in encryption
const additionalData = ...; // optional AAD
aes.decrypt(data, key, {name: 'AES-GCM', iv, additionalData, tagLength: 16}).then( (decrypted) => {
    // now you get an Uint8Array of decrypted message
});