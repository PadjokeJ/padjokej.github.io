const footerEl = document.createElement("footer");
footerEl.id = "main-footer";

const footerDiv = document.createElement("div");
footerDiv.id = "footer-bottom";

const footerText = document.createElement("p");
footerText.id = "footer-info";
footerText.innerHTML = "Made with ❤️ in 🇨🇭";
footerText.style.fontWeight = "bold";

footerDiv.appendChild(footerText);
footerEl.appendChild(footerDiv);

document.body.appendChild(footerEl)
console.log("Footer text generated")