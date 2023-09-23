function appendtoDisplay(value){
    const display= document.getElementsByName('display')[0];
    display.value+=value;
}
function deleteLastChar(){
    const display= document.getElementsByName('display')[0];
    display.value= display.value.slice(0,-1);
}
function clearDisplay(value){
    const display= document.getElementsByName('display')[0];
    display.value='';
}
function calculateResult(){
    const display=document.getElementsByName('display')[0];
    display.value=eval(display.value);
}