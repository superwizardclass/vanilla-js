const form = document.getElementById("cuttlefishForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log([...formData]);
});
