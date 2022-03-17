
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";
let n = 3;

var message="";
var encrypted = document.getElementById('caesar_encrypted');

function display()
{
    shift(3);
    message = document.getElementById("caesar_original").value;
   encrypted.innerHTML = encode(message);
    
}


function shift(n){
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
    }
} 

function encode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result;
}


function decode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = newalpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}