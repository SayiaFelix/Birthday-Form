document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const location = document.querySelector('#location').value;


        if (username == "") {

            alert('Fill in your Name');
            return false;

        } else {

            //  alert(`Hello, ${username}! Welcome to Sir Felix Portfolio, Lets Talk Business.`);

        };


        if (password.length < 8) {

            alert('Password must be must be atleast 8 characters');
            return false;

        } else {
            alert(`Hello, ${username},\n How is ${location}? \n Welcome to SIR Felix Akan,\n Select your birthday and recieve your Akan Name.`);
        };



    }
});