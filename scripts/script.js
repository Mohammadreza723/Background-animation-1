document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  for (let i = 0; i < 1400; i++) {
    const box = document.createElement("div");
    box.classList.add("square_block");
    container.appendChild(box);
    box.addEventListener("mouseover", (e) => {
        box.classList.toggle("active")
    })
    box.addEventListener("click", ()=>{
        box.classList.toggle("active");
    })
  }
  const boxes = document.querySelectorAll(".square_block");
  setInterval(() => {
    const randnum = Math.floor(Math.random() * boxes.length);
    boxes[randnum].classList.toggle("active");
  }, 10);



  // toggle menu

  const settings = document.querySelector(".settings")
  const btn_toggle = document.querySelector(".toggle_setting");
  const arrows = document.querySelectorAll(".toggle_setting > div");
  btn_toggle.addEventListener("click", ()=>{
    arrows.forEach((arrow) => {
        arrow.classList.toggle("show_menu");
        arrow.classList.toggle("hide_menu");
    })
    settings.classList.toggle("active_settings")
  })


  // change color and size and ... 

  const size = document.querySelector("#size");
  size.addEventListener("change", (e) => {
    boxes.forEach((box) => {
        box.style.height = size.value * 1 + "px";
        box.style.width = size.value * 1 + "px";
    })
  })

  const color = document.querySelector("#color");
  color.addEventListener("change", () => {
    document.documentElement.style.setProperty("--color", color.value)
  })

  const radius = document.querySelector("#radius");
  radius.addEventListener("change", () => {
    boxes.forEach((box) => {
        box.style.borderRadius = radius.value + "%";
    })
  })


  setInterval(() => {
    clearInterval();
    clearTimeout();
  } ,100000)
});
