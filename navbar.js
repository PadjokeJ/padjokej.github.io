const navbarToggle = document.getElementById("burgermenu");

navbarToggle.addEventListener("click", () => {
  let all = document.getElementsByClassName("navli");

  for (let navli = 0; navli < all.length; navli++) {
    all.item(navli).classList.toggle("navli-show");
  }
});
