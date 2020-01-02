import { elements } from "./elements";

elements.amiiboForm.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".btn").click();
  }
});

function search() {
  elements.amiiboForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const amiiboURL = `https://www.amiiboapi.com/api/amiibo/?character=${elements.amiiboName.value}`;
  });
}