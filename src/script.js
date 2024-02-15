function displayWishes(response) {
  new Typewriter("#wishes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generateWishes(event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name");
  let forSelect = document.querySelector("#for");
  let toneSelect = document.querySelector("#tone");
  let occasionSelect = document.querySelector("#occasion");
  let apiKey = "6f64aatd0b0oe3cc63e4fb944c32303a";
  let prompt = `User selected and inputed instructions: Generate ${
    occasionSelect.value
  } wishes in Polish language only for a ${
    forSelect.value
  } set tone of the wishes to ${
    toneSelect.value
  } write wishes are dedicated to ${nameInput.value.trim().toUpperCase()}`;
  let context =
    "You are greetings and occasions wishes expert and love to write short beautiful wishes in Polish language. Your mission is to write short 4 lines wishes in basic HTML. Please always seperate each sentence to new paragraf. Make sure to follow user selected and inputed instructions. Do not include a title to the wishes. Sign the wishes </br> </br> <strong>SheCodes AI</strong> at the end of the wishes.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let wishesElement = document.querySelector("#wishes");
  wishesElement.classList.remove("hidden");
  wishesElement.innerHTML = `<div id="loading"></div>  Generuje życzenia na okazję --> ${occasionSelect.value}  `;

  axios.get(apiUrl).then(displayWishes);
}

let wishesFormatElement = document.querySelector("#wishes-generator-form");
wishesFormatElement.addEventListener("submit", generateWishes);
