let input = document.querySelector("#city-input");
let btn = document.querySelector("#search-button");
let place = document.getElementById("location");
let temp = document.getElementById("temperature");
let des = document.getElementById("description");

btn.addEventListener("click", () => {
  if (input.value != "") {
    let link = `https://goweather.herokuapp.com/weather/${input.value}`;
    fetch(link)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Place not found or API error.");
        }

        return response.json();
      })
      .then((data) => {
        // check for valid data
        if (!data.temperature || !data.description) {
          throw new Error("Invalid data received from the API.");
        }

        place.textContent = input.value.toUpperCase();
        temp.textContent = data.temperature;
        des.textContent = data.description;

        input.value = "";
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      });
  }else{
    alert("please give an input")
  }
});
