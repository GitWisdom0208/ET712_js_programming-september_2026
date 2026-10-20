const btnleft = document.querySelector(".btnleft");
const btnright = document.querySelector(".btnright");
const gallery = document.querySelector(".gallerycontainer");

function scrollGallery(pixels) {
    if (!gallery) {
        return;
    }

    gallery.scrollBy({
        left: pixels,
        behavior: "smooth"
    });
}

if (btnright) {
    btnright.addEventListener("click", function () {
        scrollGallery(500);
    });
}

if (btnleft) {
    btnleft.addEventListener("click", function () {
        scrollGallery(-500);
    });
}

const myForm = document.querySelector("#myForm");
const msg = document.querySelector(".msg");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submitbtn = document.querySelector(".submitbtn");
const passwordHint = document.querySelector(".passwordmsg");

function checkFormReady() {
    if (!submitbtn || !usernameInput || !passwordInput) {
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const ready = username !== "" && password.length >= 8;

    submitbtn.disabled = !ready;

    if (passwordHint) {
        passwordHint.textContent = password.length >= 8
            ? "Password looks good."
            : "Password must be at least 8 characters long.";
        passwordHint.style.color = password.length >= 8 ? "#2e8b57" : "#87929d";
    }
}

if (submitbtn && usernameInput && passwordInput) {
    submitbtn.disabled = true;
    usernameInput.addEventListener("input", checkFormReady);
    passwordInput.addEventListener("input", checkFormReady);
}

if (myForm && msg && usernameInput && passwordInput) {
    myForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "") {
            msg.textContent = "Please enter a username.";
            return;
        }

        if (password.length < 8) {
            msg.textContent = "Password must be 8 characters long.";
            return;
        }

        msg.textContent = `Welcome, ${username}!`;
        myForm.reset();
        if (submitbtn) {
            submitbtn.disabled = true;
        }
        if (passwordHint) {
            passwordHint.textContent = "Password must be at least 8 characters long.";
            passwordHint.style.color = "#87929d";
        }
    });
}