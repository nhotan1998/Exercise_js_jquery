window.addEventListener("load", function () {
    const inputFullName = document.querySelector("#full-name");
    const inputEmail = document.querySelector("#email");
    const inputPhone = document.querySelector("#phone");
    const inputBirthday = document.querySelector("#birthday");
    const inputPassword = document.querySelector("#password");
    const inputRePassword = document.querySelector("#confirm-password");
    const btnSubmit = document.querySelector(".btn-submit");
    const resultFullName = document.querySelector(".full-name");
    const resultEmail = document.querySelector(".email");
    const resultPhone = document.querySelector(".phone");
    const resultBirthday = document.querySelector(".birthday");
    const btnUpload = document.querySelector("#btn-upload");
    const avatarUpload = document.querySelector(".avatar-upload");
    const imgPreview = document.querySelector(".img-preview");
    const iconUploadAvatar = document.querySelector(".icon-upload-avatar");
    const avatarWrapper = document.querySelector(".avatar-wrapper");
    const avatarCenter = document.querySelector(".avatar-center");
    const btnReset = document.querySelector(".btn-reset");
    
    
    /* ValidityState-typeMismatch-email */
    const regexName = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const regexPhone = /^[0][0-9]{9}/;

    const regexBirthday = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    
    // click btn shift to submit and click btn delete to reset
    (function () {
        document.querySelector("html").addEventListener("keydown", function (e) {
            //Away 2  e.which == 16
            if (e.key == "Shift") {
                submitForm(e);
            } else if (e.key == "Delete"){
                resetForm(e);
            }
        })
    })();

    //click button
    btnSubmit.addEventListener("click", submitForm);
    btnReset.addEventListener("click", resetForm);

    //check validation 
    function checkValidation(selector , msgError = "") {
        if (msgError) {
        selector.classList.add("is-invalid");
        selector.classList.remove("is-valid");
        selector.nextElementSibling.textContent = msgError;
        } else {
            selector.classList.add("is-valid");
            selector.classList.remove("is-invalid");
        }
    }
    //function removeClass 
    function removeClass(selector) {
        selector.classList.remove("is-valid");
        selector.classList.remove("is-invalid");
    }
    // check Max Length 
    function checkMaxLength(selector, field, maxLength) {
        if (selector.value.trim().length > maxLength) {
            return checkValidation(selector , `${field} max length is ${maxLength} characters`);
        } else {
            checkValidation(selector);
        }

        if (!selector.value) {
            removeClass(selector);
        }
    }

    function inputRegexValidation(selector, regex, textError = "") {
        if (!regex.test(selector.value)) {
            checkValidation(selector, textError) 
        }
        if (!selector.value) {
            removeClass(selector);
        }
    }

    //check regex input FullName
    inputFullName.addEventListener("input", function () {
        checkMaxLength(inputFullName, "Full Name", 30);
        inputRegexValidation(inputFullName, removeAscent(regexName), "Invalid Name");
    })

    //Accented characters
    function removeAscent(str) {
        if (str === null || str === undefined) return str;
         str = str.toLowerCase();
         str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
         str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
         str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
         str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
         str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
         str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
         str = str.replace(/đ/g, "d");
         return str;
     } 
    
    //Automatically capitalize the first letter
    function fullNameCase(str) {
        let arr = str.toLowerCase().split(" ");
        let save = "";
        arr.forEach(x => {
            x = x.charAt(0).toUpperCase() + x.substr(1);
            save += x + " ";
        });
        return save;
    }

    //Uppercase first characters
    inputFullName.addEventListener("change", function() {
        if (inputFullName.value) {
           inputFullName.value = fullNameCase(inputFullName.value);
        }
    })

    //check regex input Email 
    inputEmail.addEventListener("input", function() {
        checkMaxLength(inputEmail, "Email", 50);
        inputRegexValidation(inputEmail, regexEmail, "Invalid Email");
    })

    // check regex input Phone
    inputPhone.addEventListener("input", function() {
        checkMaxLength(inputPhone, "Phone", 10);
        inputRegexValidation(inputPhone, regexPhone, "Start 0 Ex: 0123456789");
    })
    
    //check birthday 
    inputBirthday.addEventListener("input", function() {
        if (this.value.length == 2) {
            this.value = this.value + "-";
        }
        if (this.value.length == 5) {
            this.value = this.value + "-";
        }

        if (this.value.length == 8 && !isNaN(this.value)) {
            this.value = this.value.substr(0,2) + "-" 
            + this.value.substr(2,2) + "-" + this.value.substr(4,4)
        }
          checkFormatDate(this);
    })

    //function check minLength , check maxLength
    function checkLength(selector , minLength , maxLength) {
        if (selector.value.trim().length > minLength && selector.value.trim().length < maxLength ) {
            return true ;
        } else {
            return false;
        }
    }

    //function check password
    function checkPassword(selector, regex, textError = "") {
        if (!regex.test(selector.value.trim())) {
            return true;
        } else {
            return false;
        }
    }

    //check input password , minLength , maxLength 
    inputPassword.addEventListener("input", function() {
        const MAX_LENGTH = 31 ;
        const MIN_LENGTH = 7 ;
        const regexLetter = /^[a-zA-Z]{1}/ ;
        const regexCharacter = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ ;
        const regexNumber = /[\d]/ ;
        const regexUpperCase = /[A-Z]/ ;
        
        if (checkLength(inputPassword, MIN_LENGTH , MAX_LENGTH)) {
            if (checkPassword(inputPassword, regexLetter)) {
                return checkValidation(inputPassword, 'Password must start with letter');
            } else {
                checkValidation(inputPassword);
            }
            if (checkPassword(inputPassword, regexCharacter)) {
                return checkValidation(inputPassword, "Password must contain special characters");
            } else {
                checkValidation(inputPassword);
            }
            if (checkPassword(inputPassword, regexNumber)) {
                return checkValidation(inputPassword, "Password must contain number");
            } else {
                checkValidation(inputPassword);
            }
            if (checkPassword(inputPassword, regexUpperCase)) {
                return checkValidation(inputPassword, "Password must have the first character capitalized");
            } else {
                checkValidation(inputPassword);
            }
        } else {
            checkValidation(inputPassword, "Passwords are 8-30 characters long");
        }
        if (!inputPassword.value) {
            removeClass(inputPassword);
        }
    })

    //upload avatar
    btnUpload.addEventListener("change", function () {
        const [avatar] = btnUpload.files;
        const arr = ["image/jpeg","image/png","image/jpg"];
        
        if (
            avatar && arr.includes(avatar.type)
        ) {
          avatarUpload.style.display = "block";
          avatarUpload.src = URL.createObjectURL(avatar);
          iconUploadAvatar.style.display = "none";
        } else {
          avatarWrapper.children[2].textContent = "Not file img";
        }
      });

    //check confirm Password
    inputRePassword.addEventListener("input", function() {
        if (inputPassword.value != inputRePassword.value) {
            checkValidation(inputRePassword, "Passwords do not match");
        } else {
            checkValidation(inputRePassword);
        }
        if (!inputRePassword.value) {
            removeClass(inputRePassword);
        }
    })

    //check FormatDate
    function checkFormatDate(field) {
        checkMaxLength(inputBirthday, "Birthday", 10);
        inputRegexValidation(inputBirthday, regexBirthday, "Invalid Birthday");
        let inputValue = field.value.trim();
        let x = inputValue.split("-").reverse();
        let d = new Date();
        let dd = String(d.getDate()).substr(0,2);
        let mm = String(d.getMonth() + 1).substr(0,2);
        let yyy = d.getFullYear();
        let dateCurrent = new Date(yyy,mm,dd).getTime();
        let dateInput = new Date(x[0],x[1], x[2]).getTime();
        if (dateInput > dateCurrent) checkValidation(inputBirthday, "Input date is greater than current date");
        checkNullField(inputBirthday, "Birthday")
    }



    //check Null Field 
    function checkNullField(field,msg) {
        if (field.value.trim().length < 1) {
            checkValidation(field, `${msg} is Required`);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        checkNullField(inputFullName, "Full name");
        checkNullField(inputEmail, "Email");
        checkNullField(inputPhone, "Phone");
        checkNullField(inputPassword, "Password");
        checkNullField(inputRePassword, "Re-password");
        checkFormatDate(inputBirthday);

        const listInvalid = document.querySelectorAll("input.is-invalid");
        if (listInvalid.length) return;
        resultFullName.innerText = inputFullName.value;
        resultEmail.innerText = inputEmail.value;
        resultPhone.innerText = inputPhone.value.slice(0, 3) + "-" 
        + inputPhone.value.slice(3, 6) + "-" + inputPhone.value.slice(6, 10);
        resultBirthday.innerText = inputBirthday.value.split("-").join("/");

        if (avatarUpload.getAttribute("src") !== "#") {
            imgPreview.setAttribute("src", avatarUpload.getAttribute("src"));
            imgPreview.style.display = "block";
            avatarCenter.children[1].style.display = "none";
        }
    }

    function resetForm(e) {
        e.preventDefault();
        const listValid = document.querySelectorAll("input.is-valid");
        const listInvalid = document.querySelectorAll("input.is-invalid");

        document.querySelectorAll("input").forEach(x => {
            x.value = "";
        })
        listValid.forEach(x => {
            x.classList.remove("is-valid");
        })
        listInvalid.forEach(x => {
            x.classList.remove("is-invalid");
        })
        iconUploadAvatar.style.display = "block";
        avatarUpload.style.display = "none";
    }
    })

