function submitHandler(){
    let inputArr = document.getElementsByClassName('one');
    let inputValue = inputArr[inputArr.length-1].value;
    let elem = document.createElement('input')
    let parentElem = document.getElementById('formList');

    elem.setAttribute('id',inputArr.length+1);
    elem.setAttribute('class','one')
    elem.setAttribute('type','text')

    parentElem.appendChild(elem).focus();

    let addValue = document.getElementById(inputArr.length);

    if(inputValue.indexOf('555', 0)>=0 && inputArr.length % 2 === 0) {
       addValue.value = inputValue.replace('555', '---').toUpperCase();
    }else if(inputValue.indexOf('555', 0)>=0 && inputArr.length % 2 !== 0){
        addValue.value = inputValue.replace('555', '---').toLowerCase()
    }else if (inputArr.length % 2 === 0) {
        addValue.value = inputValue.toUpperCase();
    }else {
        addValue.value = inputValue.toLowerCase();
    }
    return false
}
