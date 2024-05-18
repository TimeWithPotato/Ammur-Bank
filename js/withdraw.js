document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-withdraw').addEventListener('click', function () {
        const withdrawalValue = getElementValueById('withdraw-field');
        if (withdrawalValue == false) {
            alert('Please provide valid withdrawal amount');
        }
        else {
            const currentValue = getElementTextById('current-withdraw');
            const totalValue = withdrawalValue + currentValue;
            setValue('current-withdraw', 'current-balance', totalValue, withdrawalValue, 2);
        }
    })
})