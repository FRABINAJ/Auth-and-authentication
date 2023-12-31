const nameValue = document.getElementById("name-value");
    const nameerror = document.getElementById("name-error");
    const emailid = document.getElementById("emailid");
    const emailerror = document.getElementById("email-error");
    const passwordid = document.getElementById("passwordid");
    const pwderror = document.getElementById("pwd-error");

    const btn = document.getElementById("btn");

    function validateName() {
        const name = nameValue.value;

        if (name.length == 0) {
            nameerror.textContent = "Name is required";
            btn.disabled = true;
            return false;
        }

        if (!name.match(/^[A-Za-z]{3,}\s{1,}[a-zA-Z]+$/))// \s means blank space
        {
            nameerror.textContent = `Enter your full name`;
            btn.disabled = true;
            return false;
        }

        nameerror.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
        btn.disabled = false;
        return true;
    }

    nameValue.addEventListener("keyup", validateName);
    nameValue.addEventListener("blur", validateName);


    //      VALIDATE E-MAIL]

    function validateEmail() {
        const email = emailid.value;
        if (email.length == 0) {
            emailerror.textContent = `Email is required`;
            btn.disabled = true;
            return false;
        }
        if (!email.match(/^[A-Za-z0-9\._\-]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
            emailerror.textContent = `Invalid email`;
            btn.disabled = true;
            return false;
        }
        emailerror.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
        btn.disabled = false;
        return true;
    }
    emailid.addEventListener("keyup", validateEmail);
    emailid.addEventListener("blur", validateEmail);


    //      VALIDATE PASSWORD

    function validatePasswor() {
        password = passwordid.value;
        if (password.length == 0) {
            pwderror.textContent = `Password is required`;
            btn.disabled = true;
            return false;
        }
        if (!password.match(/^[A-Za-z0-9\._\$\&\#\@\!\*\~\:\"\?\\\'\`\}\{\+\=\,\.\-]{6,20}$/)) {
            pwderror.textContent = `Please enter a perfect password`;
            btn.disabled;
            return false;
        }
        pwderror.innerHTML = `<i class='fas fa-check-circle icon'></i>`;
        btn.disabled = false;
        return true;
    }
    passwordid.addEventListener("keyup", validatePasswor);
    passwordid.addEventListener("blur", validatePasswor);