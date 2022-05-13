(function () {
  "use script";
  let convertType = "miles";
  const heading = document.querySelector("h1");
  const title = document.querySelector("p");

  document.querySelector(".km-m").addEventListener("click", function () {
    convertType = "kilometer";
    heading.innerHTML = "Kilometers to Miles Converter";
    title.innerHTML ="Type in  number of kilometer and click the button to convert the distance to miles.";
  });

  document.querySelector(".m-km").addEventListener("click", function () {
    convertType = "miles";
    heading.innerHTML = "Miles to Kilometers Converter";
    title.innerHTML = "Type in number of miles and click the button to convert the distance to kilometers.";
  });


  document.getElementById("convert").addEventListener("submit", function (evt) {
    evt.preventDefault();

    const distance = parseFloat(document.getElementById("distance").value);
    const answer = document.getElementById("answer");

    if (distance) {
      if (convertType === "miles") {
        const conversion = (distance * 1.60934).toFixed(3);
        answer.innerHTML = `<h2>${distance} in miles is ${conversion} in kilometers</h2>`;
      } else if (convertType === "kilometer") {
        const conversion = (distance * 0.621371).toFixed(3);
        answer.innerHTML = `<h2>${distance} in kilometer is ${conversion} in miles</h2>`;
      }
    } else {
      answer.innerHTML = `<h2>Please enter a number</h2>`;
    }
  });
})();
