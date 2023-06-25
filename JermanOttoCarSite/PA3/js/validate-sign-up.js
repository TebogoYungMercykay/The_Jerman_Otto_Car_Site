// Selepe Sello u20748052
// The MAIN Method For Inputs Validation
function validateSignupInputs(name, surname, email, password, passConfirmation){
    // All SignupInputs are not empty
    if (name === "" || surname === "" || email === "" || password === "" || passConfirmation === ""){
        return "All SignupInputs SHOULD Not Be Empty";
    }
    // The NAME and SURNAME SignupInputs contain only Characters
    if (!/^[a-zA-Z ]+$/.test(name)){
        return "The NAME SignupInput SHOULD contain only Characters";
    }
    if (!/^[a-zA-Z ]+$/.test(surname)){
        return "The SURNAME SignupInput SHOULD contain only Characters";
    }
    // The EMAIL contains '@gmail.com' or '@tuks.co.za', and also that it has a letter on the LEFT.
    if (!/^[a-zA-Z].*@gmail\.com$|^[a-zA-Z].*@tuks\.co\.za$/.test(email)){
        return "The EMAIL SHOULD contain '@gmail.com' or '@tuks.co.za', and AT LEAST a letter on the LEFT.";
    }
    // Making sure the EMAIL doesn't contain Illegal Characters
    if (/[\/\\|<>'"]/.test(email)){
        return "Make sure the EMAIL doesn't contain Illegal Characters";
    }
    // The PASSWORD is at least 8 Characters long and contains a Number, Contains a special Character, Uppercase and Lowercase letters.
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
        return "Make sure the PASSWORD is at least 8 Characters long and contains a Number, Contains a special Character, Uppercase and Lowercase letters.";
    }
    // Making sure the PASSWORD doesn't contain Illegal Characters
    if (/[\/\\|<>'"]/.test(password)){
        return "Make sure the PASSWORD doesn't contain Illegal Characters";
    }
    // The PASSWORD and CONFIRM PASSWORD match
    if (password !== passConfirmation){
        return "The PASSWORD and CONFIRM PASSWORD SHOULD match";
    }
    // All Checks are SUCCESSFUL
    return "SUCCESSFUL";
}
// Method for the DOM Manipulation of the FORM
function validateSignupForm(){
    // Using DOM manipulation to store the HTML elements
    var nameSignupInput = document.querySelector('#signup-name');
    var surnameSignupInput = document.querySelector('#signup-username');
    var emailSignupInput = document.querySelector('#signup-email');
    var passwordSignupInput = document.querySelector('#signup-password');
    var confirmPassSignupInput = document.querySelector('#signup-password2');
    // Extracting the Values from the HTML elements
    var name = nameSignupInput.value.trim();
    var surname = surnameSignupInput.value.trim();
    var email = emailSignupInput.value.trim();
    var password = passwordSignupInput.value.trim();
    var passConfirmation = confirmPassSignupInput.value.trim();
    var validationResult = validateSignupInputs(name, surname, email, password, passConfirmation);
    // Clearing all the border Stylings
    nameSignupInput.style.border = '';
    surnameSignupInput.style.border = '';
    emailSignupInput.style.border = '';
    passwordSignupInput.style.border = '';
    confirmPassSignupInput.style.border = '';
    // Clear red borders from input SignupInputs and restore the defaults
    nameSignupInput.style.borderBottom = '1px solid rgb(196, 196, 196)';
    surnameSignupInput.style.borderBottom = '1px solid rgb(196, 196, 196)';
    emailSignupInput.style.borderBottom = '1px solid rgb(196, 196, 196)';
    passwordSignupInput.style.borderBottom = '1px solid rgb(196, 196, 196)';
    confirmPassSignupInput.style.borderBottom = '1px solid rgb(196, 196, 196)';
    // If all the SignupInputs have been validated, Submit the form to validate-signup
    if (validationResult !== 'SUCCESSFUL'){
        // Add a red border to the invalid SignupInputs
        if (validationResult === "All SignupInputs SHOULD Not Be Empty"){
            if (name === ""){
                nameSignupInput.style.border = '1px solid red';
            }
            if (surname === ""){
                surnameSignupInput.style.border = '1px solid red';
            }
            if (email === ""){
                emailSignupInput.style.border = '1px solid red';
            }
            if (password === ""){
                passwordSignupInput.style.border = '1px solid red';
            }
            if (passConfirmation === ""){
                confirmPassSignupInput.style.border = '1px solid red';
            }
            console.log(validationResult);
        }
        if (validationResult === "The SURNAME SignupInput SHOULD contain only Characters"){
            surnameSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        if (validationResult === "The NAME SignupInput SHOULD contain only Characters"){
            nameSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        if (validationResult === "The EMAIL SHOULD contain '@gmail.com' or '@tuks.co.za', and AT LEAST a letter on the LEFT."){
            emailSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        if (validationResult === "Make sure the EMAIL doesn't contain Illegal Characters"){
            emailSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        if (validationResult === "Make sure the PASSWORD is at least 8 Characters long and contains a Number, Contains a special Character, Uppercase and Lowercase letters."){
            passwordSignupInput.style.border = '1px solid red';
            confirmPassSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        if (validationResult === "Make sure the PASSWORD doesn't contain Illegal Characters"){
            passwordSignupInput.style.border = '1px solid red';
            confirmPassSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        if (validationResult === "The PASSWORD and CONFIRM PASSWORD SHOULD match"){
            passwordSignupInput.style.border = '1px solid red';
            confirmPassSignupInput.style.border = '1px solid red';
            console.log(validationResult);
        }
        return false;
    }
    return true;
}