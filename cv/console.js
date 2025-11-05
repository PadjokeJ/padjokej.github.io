function echo(text) {
  document.getElementById("console").innerHTML += "\ncommand not found -> stay tuned for updates!\n"
}

document.addEventListener("keydown", () => {
  let k = event.key;
  let user_text = document.getElementById("user-input").innerHTML;
  if (k.length == 1) {
    document.getElementById("user-input").innerHTML += k;
  } else if (k == "Backspace") {
    if (user_text.length > 0) {
      document.getElementById("user-input").innerHTML = user_text.substring(0, user_text.length - 1);
    }
  } else if (k == "Enter") {
    echo(user_text);
    let el = document.getElementById("user-input");
    let cu = document.getElementById("cursor");
    document.getElementById("console").innerHTML += "git@padjokej.dev: Life$ ";
    let clone = el.cloneNode(true);
    let cu_clone = cu.cloneNode(true);
    document.getElementById("user-input").id = "old-input";
    document.getElementById("cursor").remove();
    document.getElementById("console").appendChild(clone);
    document.getElementById("console").appendChild(cu_clone);
    document.getElementById("user-input").innerHTML = "";
  }
});
