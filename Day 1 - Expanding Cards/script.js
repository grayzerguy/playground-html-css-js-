const panel = document.querySelectorAll(".panel");
// console.log(typeof panel);

panel.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    // console.log("hello");
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
