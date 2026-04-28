class FileNode {
  constructor(isDir, p, name) {
    this.isDir = isDir;
    if (p != null)
      p.addChild(this);
    this.p = p;
    this.name = name;
  }
}

class Directory extends FileNode {
  children = [];
  constructor(p, name) {
    super(true, p, name);
  }

  addChild(c) {
    this.children.push(c);
  }

  path() {
    if (this.p == null) return this.name;
    return this.p.path() + '/' + this.name;
  }
}

class File extends FileNode {
  constructor(p, name) {
    super(false, p, name);
  }
}

const root = new Directory(null, "");

console.log(root.path());

const home = new Directory(root, "home");
const user = new Directory(home, "jonatan");
const life = new Directory(user, "Life");
console.log(user.path());

let currentPath = life;

function echo(txt) {
  echo(txt, true);
}

function echo(txt, flush) {
  document.getElementById("console").innerHTML += '\n' + txt;
}

function execCmd(text) {
  switch (text) {
    case "ls":
      currentPath.children.forEach(c => echo(c.name, false));
      echo("");
      break;
    case "pwd":
      echo(currentPath.path());
      break;
    case "git log":
      echo(document.getElementById("gitlog").innerHTML);
      break;
    default:
      if (text.startsWith("echo "))
        echo(text.slice(5));
      else
        echo("bash: command not found -> stay tuned for updates!");
  }
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
    execCmd(user_text);
    let el = document.getElementById("user-input");
    let cu = document.getElementById("cursor");
    document.getElementById("console").innerHTML += "\njonatan@padjokej.dev: " + currentPath.name + "$ ";
    let clone = el.cloneNode(true);
    let cu_clone = cu.cloneNode(true);
    document.getElementById("user-input").id = "old-input";
    document.getElementById("cursor").remove();
    document.getElementById("console").appendChild(clone);
    document.getElementById("console").appendChild(cu_clone);
    document.getElementById("user-input").innerHTML = "";
  }
});
