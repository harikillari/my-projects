const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const firstnameEl = document.getElementById('fname');
const lastnameEl = document.getElementById('lname');

const form = document.getElementById('register-form');
const login = document.getElementById('login-form');
const btn = document.getElementById('log');


const loginBtn = document.getElementById('reg');

const usernameEl = document.getElementById('uname');
const loginPasswordEl = document.getElementById('login-password');

const checkUsername = () => {
    let valid = false;

    const min = 3,
        max = 20;

    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkLoginPassword = () => {
    let valid = false;


    const logPassword = loginPasswordEl.value.trim();

    if (!isRequired(logPassword)) {
        showError(loginPasswordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(logPassword)) {
        showError(loginPasswordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(loginPasswordEl);
        valid = true;
    }

    return valid;
}

const checkFirstname = () => {
    let valid = false;

    const min = 3,
        max = 10;

    const firstname = firstnameEl.value.trim();
    if (!isRequired(firstname)) {
        showError(firstnameEl, 'Firstname cannot be blank.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstnameEl, `Firstname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};

const checkLastname = () => {
    let valid = false;

    const min = 3,
        max = 10;

    const lastname = lastnameEl.value.trim();
    if (!isRequired(lastname)) {
        showError(lastnameEl, 'Lastname cannot be blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Lasttname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

if (form) {

    form.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate fields
        let isFirstnameValid = checkFirstname(),
            isLastnameValid = checkLastname(),
            isEmailValid = checkEmail(),
            isPasswordValid = checkPassword(),
            isConfirmPasswordValid = checkConfirmPassword();

        let isFormValid = isFirstnameValid &&
            isLastnameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid;

        form.method = 'POST'
        form.action = 'login.html'

        // submit to the server if the form is valid
        if (isFormValid) {
            var firstName = document.getElementById('fname').value;
            var lastName = document.getElementById('lname').value;
            var password = document.getElementById('password').value;
            var emailId = document.getElementById('email').value;
            var course = document.getElementById('course').value;
            var state = document.getElementById('state').value;
            var city = document.getElementById('city').value;
            var regstrationNumber = document.getElementById('reg-no').value;
            var address = document.getElementById('address').value;



            let arr = []
            let storage = JSON.parse(sessionStorage.getItem('userItems'));
            if (storage) {
                arr = JSON.parse(sessionStorage.getItem('userItems'))
            }
            var objCreation = function () {
                this.username = `${firstName}${lastName}`;
                this.password = password;
                this.email = emailId;
                this.course = course;
                this.state = state;
                this.city = city;
                this.address = address;
                this.regstrationNumber = regstrationNumber;
            }
            let p = new objCreation()
            arr.push(p)
            console.log("Inside The block Scope...")



            console.log("IT IS True")

            sessionStorage.setItem(`userItems`, JSON.stringify(arr))
            window.location.href = window.location.href.replace('index', 'login')

        }
        else {
            console.log("Hey , It's False..")
        }

    });
}



const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

if (form) {

    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'fname':
                checkFirstname();
                break;
            case 'lname':
                checkLastname();
                break;
            case 'email':
                checkEmail();
                break;
            case 'password':
                checkPassword();
                break;
            case 'confirm-password':
                checkConfirmPassword();
                break;
        }
    }));

}


if (login) {
    login.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate fields
        let isUsenameValid = checkUsername(),
            isLoginPasswordValid = checkLoginPassword();
        let isLoginFormValid = isUsenameValid &&
            isLoginPasswordValid;


        // submit to the server if the form is valid
        if (isLoginFormValid) {
            let uname = document.getElementById('uname').value;
            let userDetails = JSON.parse(sessionStorage.getItem('userItems'))
            const filterInfo = userDetails.filter((s) => s.name === '' && s.password === ''); 
            if (filterInfo.length) {
                window.location.href = window.location.href.replace('login', 'login_success')
            }
            // for (let i = 0; i < userDetails.length; i++) {
            //     let userName = userDetails[i]["username"]
            //     var checkPassword = userDetails[i].password
            //     if (userName === uname ) {
            //         var indexSave = i;
            //         break;
            //     }
            // }
            // let resValue = userDetails[indexSave]
            // if (resValue.password === checkPassword) {
            //     window.location.href = window.location.href.replace('login', 'login_success')
            // }

        }

    }

    )
}


if (login) {

    login.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'uname':
                checkUsername();
                break;
            case 'login-password':
                checkLoginPassword();
                break;
        }
    }));

}




// push --->

// pop--->


// shift-->

// unshift--->

// [1,2,3]

// reduce (a, b)

// indexof('1')
// 0

