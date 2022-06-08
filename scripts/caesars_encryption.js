
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";
let text="";

const n = document.getElementsByName('answer');
console.log(n);
//Function to be called when button clicked
function displayencode()
{
   shift(n);
   text = document.getElementById("input").value;
   document.getElementById('output').value = encode(text);
   document.getElementById('input').value = "";
}
function displaydecode()
{
    shift(n);
    text = document.getElementById("input").value;
    document.getElementById('output').value = decode(text);
    document.getElementById('input').value = "";
}

//******************************************** */
/*Shifts the letters */
function shift(n){

    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
        console.log(newalpha);
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