function submitHandler(){
    let inputValue=document.forms.inputList.elements.one.value;
    console.log(inputValue)

    if(inputValue.indexOf('555', 0)>=0) {
        inputValue=inputValue.replace('555', '---')
        // alert(inputValue)
        inputMaker(inputValue)
        document.forms.inputList.reset()
        return false;
    } else {
        document.forms.inputList.reset()
        alert('no 555')
        return false;
    }
}
function inputMaker (text){
   let inputValue = text;
   let elem= document.createElement('input')
   elem.setAttribute('name','one');
   elem.setAttribute('type','text')
   elem.setAttribute('placeHolder', inputValue);
   document.getElementById('myForm').appendChild(elem);

}