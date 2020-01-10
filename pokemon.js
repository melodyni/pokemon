const call = function(context) {
  const root = document.getElementById("root");
  root.style.display = "none";
  const popup = document.getElementById("popup");
  popup.classList.replace("hide", "popup-box");
  const summary = context.childNodes[1];
  console.log(context.childNodes);
  const description = document.getElementById("description");
  description.innerText = "";
  summary.style.display = "block";
  description.appendChild(summary);
};

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (key === "Escape") {
    const root = document.getElementById("root");
    root.style.display = "block";
    const popup = document.getElementById("popup");
    popup.classList.replace("popup-box", "hide");
  }
});
