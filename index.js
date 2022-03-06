document.querySelector('form').onsubmit = () => {

    const dateInput = document.querySelector('#day').value;


    if (dateInput <= 0 || dateInput > 31) {

        alert('Your date is invalid,\n please enter the valid date');
        return false;
    }

    if (male !== "" || female !== "") {
        alert('Your Akan name is,Koffi');
        return false;
    }
};

function myFunction() {

    const dateInput = document.querySelector('#day').value;

    const dates = new Date(dateInput)
    const days = dates.getDay();

    console.log(days)



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


    const result = document.querySelector('#result').value;


    const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const genderInput = document.querySelectorAll;
    "input[name='gender]:checked"



}