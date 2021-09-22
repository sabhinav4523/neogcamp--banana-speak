var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
console.log(txtInput);
console.log(btnTranslate);
//took input from user through interaction and based on that interaction you provide the output
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
})
