(function () {
  const form = document.getElementById("cuttlefishForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log([...formData]);

    const cuttlefishList = document.getElementById("cuttlefishList");
    console.log(cuttlefishList);
    const newRow = document.createElement("div");
    newRow.appendChild(document.createTextNode(`Name:`));
    cuttlefishList.appendChild(newRow);
  });
})();
