const call = function(context) {
  root.style.display = "none";
  popup.classList.replace("hide", "popup-box");
  const summary = context.childNodes[1].cloneNode(true);
  description.innerText = "";
  summary.style.display = "block";
  description.appendChild(summary);
};

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (key === "Escape") {
    root.style.display = "block";
    popup.classList.replace("popup-box", "hide");
  }
});
