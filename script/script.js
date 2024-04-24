
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

let s_imgs=document.querySelector(".s-imgs")
let chld=s_imgs.children
let b_img=document.getElementById("img")

for (let index = 0; index < chld.length; index++) {
    chld[index].addEventListener("click",()=>{
        b_img.src=chld[index].src        
    })
    
}

let menu_icon = document.querySelector(".menu-icon")
let menu=document.querySelector(".menu")

menu_icon.addEventListener("click",()=>{
    console.log("work");
  menu.classList.toggle("act")
})