function addcharacter(character){
    const valorInput = document.querySelector('.input-display').value;
    document.querySelector('.input-display').value = valorInput + character;
}

function clearInput(){
    document.querySelector('.input-display').value = '';

}
function calc(){
    const valorInput = document.querySelector('.input-display').value;
    document.querySelector('.input-display').value = eval(valorInput);

}
function invert(){
    const valorInput = document.querySelector('.input-display').value;
    document.querySelector('.input-display').value = valorInput * -1;

}
