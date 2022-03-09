// document.querySelector('form').onsubmit = () => {

//     const dateInput = document.querySelector('#day').value;


//     if (dateInput <= 0 || dateInput > 31) {

//         alert('Your date is invalid,\n please enter the valid date');
//         return false;
//     }

//     if (male !== "" || female !== "") {
//         alert('Your Akan name is,Koffi');
//         return false;
//     }
// };

// function myFunction() {

//     const dateInput = document.querySelector('#day').value;

//     const dates = new Date(dateInput)
//     const days = dates.getDay();

//     console.log(days)



//     switch (days) {
//         case 0:
//             result.innerHTML = "Sunday";
//             break;
//         case 1:
//             result.innerHTML = "Monday";
//             break;
//         case 2:
//             result.innerHTML = "Tuesday";
//             break;
//         case 3:
//             result.innerHTML = "Wednesday";
//             break;
//         case 4:
//             result.innerHTML = "Thursday";
//             break;
//         case 5:
//             result.innerHTML = "Friday";
//             break;
//         case 6:
//             result.innerHTML = "Saturday";
//             break;

//     }


//     const result = document.querySelector('#result').value;


//     const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//     const genderInput = document.querySelectorAll;
//     "input[name='gender]:checked"



// }
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateDate();

});


function validateDate() {

    const gender = document.getElementById('gender').value;
    // const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    // const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const akanNames = {
        male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
        female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
    };

    let date = document.getElementById("date").value;
    if (!date) {
        return alert("Please select Your Date to continue!!!");
    }

    let bornDate = new Date(date);
    let akanNameValue = getAkanNames(akanNames, bornDate.getDay());



    if (akanNameValue === "none") {
        return alert("Please select your gender to continue!!!")

    }
    if (date && akanNameValue !== "none") {
        let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < daysOfTheWeek.length; i++) {
            if (bornDate.getDay() === i) {
                alert(`Born on ${daysOfTheWeek[i]}, your Akan name is ${akanNameValue}`);

                document.querySelector("#gender").value = "none";
                document.querySelector("#date").value = "";
            }
        }
    }

};