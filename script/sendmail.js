const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const emain = document.getElementById("email");
const phone = document.getElementById("phone");
const commet = document.getElementById("comment");

function sendMail() {
  const body = `Name:${fname.value} ${lname.value} <br> 
email:${email.value} <br> 
phone:${phone.value} <br>
comment:${commet.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "asiksk137@gmail.com",
    Password: "305DDE76D8547108C5148913EE65854C07F8",
    To: "asiksk137@gmail.com",
    From: "asiksk137@gmail.com",
    Subject: "This is the subject",
    Body: body,
  }).then((message) =>
    swal("Thank You", "Your submission has been sent.", "success")
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
  setTimeout(() => {
    form.reset();
  }, 1000);
});

let menu_icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");

menu_icon.addEventListener("click", () => {
  console.log("work");
  menu.classList.toggle("act");
});
