import { removeLastChild } from "./remove.js";
import {button,input,container,nameDiv,country,imageOfWeather,temp,time,text} from "./selectors.js";

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
      nameDiv.textContent = `City: ${data.location.name}`;
      country.textContent = `Country: ${data.location.country}`;
      time.textContent = `Current local time: ${data.location.localtime}`;
      temp.textContent = `Temperature: ${data.current.temp_c} °C`;
      text.textContent = `Today's condition: ${data.current.condition.text}`
      imageOfWeather.src = `${data.current.condition.icon}`;

      removeLastChild(container);

      const objects = [nameDiv, country, time,temp,  imageOfWeather, text];
      container.append(...objects);

      input.value = "";
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
