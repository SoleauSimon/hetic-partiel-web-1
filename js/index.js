

var headerFixeContainer = document.querySelector('#header');

window.addEventListener('wheel', function(event) {
  console.log(event.deltaY);
  if (event.deltaY > 0) {
    // headerFixeContainer.classList.add("is-not-active");
    headerFixeContainer.style.marginTop = "-150px";
  } else if (event.deltaY < 0) {
    // headerFixeContainer.classList.remove("is-not-active");
    headerFixeContainer.style.marginTop = "";

  } else if (event.deltaY > 90) {
    headerFixeContainer.style.transition = "3s";
  }

})
