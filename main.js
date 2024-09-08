const buttons = document.querySelectorAll("button");
const contentList = document.querySelectorAll(".tabs__content");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("tabs__button")) {
      contentList.forEach((content) => {
        content.classList.remove("active");
      });
    }

    contentList[+event.target.id].classList.add("active");
  });
});
