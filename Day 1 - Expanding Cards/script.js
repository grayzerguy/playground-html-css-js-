const panels = document.querySelectorAll(".panel"); // get all the div whit class="panel"

//loop over all the panel and add event Listener (click) remove class active from add div's and add to the one we click
panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    // console.log("hello");
    removeActiveClasses();
    panel.classList.add("active");
  });
});
//function to remove the class (active) from all div's (we call thr function up before we add class active to the new)
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
