function getElementValueById(Id) {
    const element = document.getElementById(Id);
    const value = element.value;
    if (value < 0) {
        return false;
    }
    element.value = null;
    return parseFloat(value);
}
function getElementTextById(Id) {
    const element = document.getElementById(Id);
    const value = element.innerText;
    return parseFloat(value);
}

function setValue(Id1, Id2, totalValue,inputValue, x) {
    const element2 = document.getElementById(Id2);
    const value2 = parseFloat(element2.innerText);
    if (x == 1) {
        element2.innerText = value2 + inputValue;
    }
    if (x == 2) {
        if (inputValue > value2) {
            alert('Insufficient balance, try again');
            return;
        }
        else {
            element2.innerText = value2 - inputValue;
        }
    }

    const element = document.getElementById(Id1);
    element.innerText = totalValue;

}