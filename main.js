// MENU ICON / BOUTON 
let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
    menu.classList.toggle("move");
}

// HEADER BACKGROUND CHANGE ON SCROLL
let header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
    header.classList.toggle("header-active", window.scrollY > 0);
    },
    { passive: true }
)

// EMAIL JS - SWEET ALERT
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    
    if (name.value == "" || email.value == "" || msg.value == "") {
        emptyError();
    }
    else {
        sendMail(name.value, email.value, msg.value);
        success();
    }
};

let sendBtn = document.querySelector(".send-btn");
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validate();
});

function emptyError() {
    swal({
        title: "Erreur !",
        text: "Veuillez remplir tous les champs",
        icon: "warning",
    });
}

function success() {
    swal({
        title: "Mail envoyé !",
        text: "Merci, vous serez contacté au plus vite",
        icon: "success",
    });
}

function sendMail(name, email, msg,){
    emailjs.send("service_ex1yeze","template_ts30csi", {
        from_name: name,
        from_mail: email,
        message: msg,
    });
}




