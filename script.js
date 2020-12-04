function submitHandler(){
    let inputArr = document.getElementsByName('one');
    let inputValue = inputArr[+inputArr.length-1].value;
    console.log(inputValue)
    let elem = document.createElement('input')
    let parentElem = document.getElementById('myForm');
    elem.setAttribute('id',inputArr.length+1);
    elem.setAttribute('name','one')
    elem.setAttribute('type','text')
    parentElem.append(elem);

    if(inputValue.indexOf('555', 0)>=0 && +inputArr.length%2===0) {
        inputValue = inputValue.replace('555', '---').toUpperCase();
        alert(inputValue)
        document.getElementById(inputArr.length + 1).value = inputValue
        parentElem.reset()
        return false;
    } else if(inputValue.indexOf('555', 0)>=0 && !+inputArr.length%2===0) {
        inputValue = inputValue.replace('555', '---').toLowerCase();
        document.getElementById(inputArr.length+1).value = inputValue
        parentElem.reset()
        return false;
    } else if(+inputArr.length%2===0){
        inputValue = inputValue.toUpperCase();
        document.getElementById(inputArr.length+1).value = inputValue
        parentElem.reset()
        return false;
    }

}
