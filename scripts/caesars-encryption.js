
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";
let text="";
const n = 2;
//Function to be called when button clicked
function displayencode()
{
   shift(n);
   text = document.getElementById("caesar_original").value;
   document.getElementById('caesar_encrypted').value = encode(text);
   document.getElementById('caesar_original').value ="";
}
function displaydecode()
{
    shift(n)
    text = document.getElementById("caesar_encrypted").value;
    document.getElementById('caesar_original').value = decode(text);
    document.getElementById('caesar_encrypted').value = "";
}

//******************************************** */
/*Shifts the letters */
function shift(n){
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
    }
} 
//* Encoding function */
function encode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result;
}

/* Deocding function */
function decode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = newalpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}