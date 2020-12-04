function submitHandler(){
    let inputArr = document.getElementsByClassName('one');
    let inputValue = inputArr[inputArr.length-1].value;
    let elem = document.createElement('input')
    let parentElem = document.getElementById('formList');
    elem.setAttribute('id',inputArr.length+1);
    elem.setAttribute('class','one')
    elem.setAttribute('type','text')
    parentElem.appendChild(elem).focus();

    if(inputValue.indexOf('555', 0)>=0){
        if(inputArr.length%2===0){
            inputValue = inputValue.replace('555', '---').toUpperCase();
            document.getElementById(inputArr.length).value = inputValue;
            console.log(inputValue)
            return false;
        }else{
            inputValue = inputValue.replace('555', '---').toLowerCase();
            document.getElementById(inputArr.length).value = inputValue;
            console.log(inputValue)
            return false;
        }
    }else if(inputArr.length%2===0){
        inputValue = inputValue.toUpperCase();
        document.getElementById(inputArr.length).value = inputValue;
        console.log(inputValue)
        return false;
    }else{
        inputValue = inputValue.toLowerCase();
        document.getElementById(inputArr.length).value = inputValue;
        console.log(inputValue)
        return false;
    }



}
