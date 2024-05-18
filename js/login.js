document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-submit').addEventListener('click', function () {
        const userEmail = document.getElementById('user-email').value;
        const userPass = document.getElementById('user-password').value;

        if (userEmail == 'arif@gmail.com' && userPass == 'realXmadrid')
        {
            location.href = 'bank.html';
        }
        else
        {
            alert('Invalid');
        }
    })
})