const footerEl = document.createElement("footer");
footerEl.id = "main-footer";

const footerDiv = document.createElement("div");
footerDiv.id = "footer-bottom";

const footerText = document.createElement("p");
footerText.id = "footer-info";
footerText.innerHTML = "Made with ❤️ in 🇨🇭";
footerText.style.fontWeight = "bold";

const sourceLink = document.createElement("a");
sourceLink.id = "footer-source";
sourceLink.href = `https://github.com/PadjokeJ/padjokej.github.io/tree/main${window.location.pathname}`;
sourceLink.innerHTML = "See source";

footerDiv.appendChild(footerText);
footerText.append(sourceLink);
footerEl.appendChild(footerDiv);
document.body.appendChild(footerEl);

