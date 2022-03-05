document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const form = document.querySelector('#form').value;
        const date = document.querySelector('#date').value.trim();
        const month = document.querySelector('#year').value.trim();
        const year = document.querySelector('#date').value.trim();
        const male = document.querySelector('#male').value;
        const female = document.querySelector('#female').value;
        const nd = document.querySelector('#nd').value;

        const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', ' Kofi', 'Kwame'];

        const femaleName = ['Akosua', 'Adwoa', 'Adwoa', 'Akua', 'Yaa', 'Afua', 'Ama'];


        // form.addEventListener('onclick', (e) => {
        //  e.preventDefault();
        //  })

        if (form == "") {
            alert('Please enter you BIRTHDAY DATE before submitting.');
            return false;
        };



        if (date == "" || date <= 0 || date > 31) {

            alert('Your date is invalid,\n please enter the valid date')
            return false;

        };


        if (month == "" || month <= 0 || male > 31) {

            alert('Your Month is invalid,\n please enter the valid Month')
            return false;
        };


        if (year <= 1984 || year > 2022) {

            alert('Your Year is invalid,\n please enter the valid Year')
            return false;

        } else {

            alert('Your Birthday date was Successfull enterred,\n Select your gender and receive your Akan name')
            return false
        };


    }

});

//document.addEventListener('DOMContentLoaded', function() {
///document.querySelector('form').onsubmit = () => {
//const form = document.querySelector('#form').value;
//const date = document.querySelector('#date').value.trim();
//const month = document.querySelector('#year').value.trim();
//const year = document.querySelector('#date').value.trim();
//const male = document.querySelector('#male').value;
//const female = document.querySelector('#female').value;
//const nd = document.querySelector('#nd').value;

//const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', ' Kofi', 'Kwame'];

//const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


///function isDate(date) {
///return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) * 7

//};


///if (male == document.write(maleName[0])) {
///alert('Your akan name is, Kwasi');
///};
//if (male == document.write(maleName[1])) {
//  alert('Your akan name is,Kwadwo');
//};
//if (male == document.write(maleName[2])) {
//alert('Your akan name is,Kwabena');
//};
//if (male == document.write(maleName[3])) {
//    alert('Your akan name is,Kwaku');
//};
//if (male == document.write(maleName[4])) {
//alert('Your akan name is,Yaw');
//};
//if (male == document.write(maleName[5])) {
//alert('Your akan name is,kofi');
//};
///if (male == document.write(maleName[6])) {
//alert('Your akan name is,kwame');
//};






//if (female == document.write(femaleName[0])) {
///alert('Your akan name is,Akosoa');
//};
///if (female == document.write(femaleName[1])) {
///alert('Your akan name is,Adwoa');
///};
///if (female == document.write(femaleName[2])) {
// alert('Your akan name is,Abenaa');
///};
///if (female == document.write(femaleName[3])) {
///alert('Your akan name is,Akua');
///};
///if (female == document.write(femaleName[4])) {
///alert('Your akan name is,Yaa');
//};
///if (female == document.write(femaleName[5])) {
///alert('Your akan name is,Afua');
///};
///if (female == document.write(femaleName[6])) {
/// alert('Your akan name is,Ama');
///};

///}
//});