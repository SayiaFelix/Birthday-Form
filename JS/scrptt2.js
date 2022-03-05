document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {

        const day = document.querySelector('#day').value;
        const month = document.querySelector('#month').value;
        const year = document.querySelector('#year').value;
        const result = document.getElementById('result');

        const form = document.querySelector('#form').value;
        const male = document.querySelector('#male').value;




        if (day == "" || day <= 0 || day > 31) {

            alert('Your date is invalid,\n please enter the valid date');
            return false;

        };


        if (month <= 0 || month > 12) {
            alert('Your month is invalid,\n please enter the valid month');
            return false

        };


        if (year <= 1984 || year > 2020) {
            alert('Your year is invalid')
            return false;

        } else {
            return false;
        };




        function validateForm() {

            const dates = new Date(day.value, month.value, year.value);
            const days = dates.getDay();

            switch (days) {
                case 0:
                    result.innerHTML = "Sunday";
                    break;
                case 1:
                    result.innerHTML = "Monday";
                    break;
                case 2:
                    result.innerHTML = "Tuesday";
                    break;
                case 3:
                    result.innerHTML = "Wednesday";
                    break;
                case 4:
                    result.innerHTML = "Thursday";
                    break;
                case 5:
                    result.innerHTML = "Friday";
                    break;
                case 6:
                    result.innerHTML = "Saturday";
                    break;

            }

        };


    }
});
//const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', ' Kofi', 'Kwame'];

//const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const result = document.getElementById('result');

function validateForm() {

    const dates = new Date(day.value, month.value, year.value);
    const days = dates.getDay();

    switch (days) {
        case 0:
            result.innerHTML = "Sunday";
            break;
        case 1:
            result.innerHTML = "Monday";
            break;
        case 2:
            result.innerHTML = "Tuesday";
            break;
        case 3:
            result.innerHTML = "Wednesday";
            break;
        case 4:
            result.innerHTML = "Thursday";
            break;
        case 5:
            result.innerHTML = "Friday";
            break;
        case 6:
            result.innerHTML = "Saturday";
            break;

    }

};