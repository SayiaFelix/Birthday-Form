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

            //  alert('Your Birthday date was Successfull enterred,\n Select your gender and receive your Akan name')
            return false
        };

    }

});