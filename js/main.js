"use strict";
const form = document.querySelector(".new-form");
form.classList.add("js-new-form")
// form.classList.remove("collapsed")


// const kittenImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
// const kittenName = "Anastacio";
// const kittenDesc =
//   "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
// const kittenRace = "British Shorthair";

// const kittenOne = document.querySelector(".card");
// kittenOne.innerHTML = `<li class="card">
// <article>
//     <img class="card_img" src=${kittenImage} alt="gatito" />
//     <h3 class="card_title">${kittenName}</h3>
//     <h4 class="card_race">${kittenDesc}</h4>
//     <p class="card_description">
//         ${kittenRace}
//     </p>
// </article>
// </li>`;

const kittenImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName = "Anastacio";
const kittenRace = "British Shorthair";
const kittenDesc = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle";

const kittenOne = document.querySelector(".card");
kittenOne.innerHTML = `<li class="card">
<article>
    <img class="card_img" src=${kittenImage} alt="gatito" />
    <h3 class="card_title">${kittenName}</h3>
    <h4 class="card_race">${kittenRace}</h4>
    <p class="card_description">
        ${kittenDesc}
    </p>
</article>
</li>`;


const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "Fiona";
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace1 = "British Shorthair";

const kittenTwo = document.querySelector(".card");
kittenOne.innerHTML = `<li class="card">
<article>
    <img class="card_img" src=${kittenImage1} alt="gatito" />
    <h3 class="card_title">${kittenName1}</h3>
    <h4 class="card_race">${kittenDesc1}</h4>
    <p class="card_description">
        ${kittenRace1}
    </p>
</article>
</li>`;