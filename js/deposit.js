document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-deposit').addEventListener('click', function () {
        const depositValue = getElementValueById('deposit-field');
        if (depositValue == false) {
            alert('Please provide valid amount');
        }
        else {
            const currentValue = getElementTextById('current-deposit');
            const totalValue = depositValue + currentValue;
            setValue('current-deposit','current-balance', totalValue,depositValue,1);
        }

    })
})