
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
    return `<a href="./product1.html"><li>` + list + "</li></a>";
  });

  result_box.innerHTML = "<ul>" + content.join(" ") + "</ul>";
}

let menu_icon = document.querySelector(".menu-icon")
let menu=document.querySelector(".menu")

menu_icon.addEventListener("click",()=>{
    console.log("work");
  menu.classList.toggle("act")
})
