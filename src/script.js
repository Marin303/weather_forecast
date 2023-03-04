import { removeLastChild } from "./remove.js";
import {
  button,
  input,
  container,
  nameDiv,
  country,
  imageOfWeather,
} from "./selectors.js";

button.addEventListener("click", myFunction);

input.addEventListener("keydown", (a) => {
  if (a.key === "Enter") {
    return myFunction(a);
  }
});

function myFunction() {
  const inputValue = input.value;

  fetch(
    `http://api.weatherapi.com/v1/current.json?q=${inputValue}&key=03ebd7ee875442079c4185253230303`
  )
    .then((response) => response.json())
    .then((data) => {
      nameDiv.textContent = data.location.name;
      country.textContent = data.location.country;
      imageOfWeather.src = `${data.current.condition.icon}`;

      removeLastChild(container);

      container.appendChild(nameDiv);
      nameDiv.appendChild(country);
      container.appendChild(imageOfWeather);

      input.value = "";
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
