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
    Username: "info@cagindustries.in",
    Password: "19F88AAE2C42F6A466E9FEE8A18B85CFD678",
    To: "info@cagindustries.in",
    From: "info@cagindustries.in",
    Subject: "Customer feedback",
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


const data = ["Silver Impregnated Graphite Contacts", "Silver Impregnated Graphite Heavy Duty Contacts"];
const input_box = document.getElementById("input_box");
const result_box = document.querySelector(".result");

input_box.onkeyup = () => {
  let result = [];
  let input = input_box.value;
  console.log(input);
  if (input.length) {
    result = data.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);
  if(!result.length){
    result_box.innerHTML=" "
  }
};

function display(result) {
  const content = result.map((list,index) => {
    return `<a href="../product1.html"><li>` + list + "</li></a>";
  });

  result_box.innerHTML = "<ul>" + content.join(" ") + "</ul>";
}