document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#p2-ani", {
    opacity: 0,
    y: 200,
    scrollTrigger: {
      trigger: "#page-2",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from("#p8-ani", {
    opacity: 0,
    x: 200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page-8",
      scrub: true,
      start: "top center",
      end: "bottom center",
    },
  });
  gsap.from("#p3-ani", {
    opacity: 0,
    x: -200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page-3",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".s-img", {
    opacity: 0,
    x: -200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-1",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".s-img2", {
    opacity: 0,
    x: 200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-2",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".text", {
    opacity: 0,
    x: 200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-1",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".text2", {
    opacity: 0,
    x: -200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-2",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });

  gsap.from(".s-img3", {
    opacity: 0,
    y: -200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-3",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".s-img4", {
    opacity: 0,
    scale: 2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-4",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".text3", {
    opacity: 0,
    y: 200,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-3",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".text4", {
    opacity: 0,
    scale: 2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#sec-4",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });

  gsap.from(".p-boxR", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page-4",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
  gsap.from(".p-boxL", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page-4",
      scrub: true,
      start: "top center",
      end: "50% center",
    },
  });
});

let menu_icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");

menu_icon.addEventListener("click", () => {
  console.log("work");
  menu.classList.toggle("act");
});

let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
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
    return `<a href="./pages/product${index+1}.html"><li>` + list + "</li></a>";
  });

  result_box.innerHTML = "<ul>" + content.join(" ") + "</ul>";
}