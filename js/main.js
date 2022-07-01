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
/*objetos gatitos*/
const kittenData = {
    kittenImage: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    kittenName: "Anastacio",
    kittenDesc: " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle",
    kittenRace: "British Shorthair"


};
function renderKitten(kittenData) {
    const cardList = `<li class="card">
     <article>
         <img class="card_img" src=${kittenData.kittenImage} alt="gatito" />
         <h3 class="card_title">${kittenData.kittenName}</h3>
         <h4 class="card_race">${kittenData.kittenDesc}</h4>
         <p class="card_description">
            ${kittenData.kittenRace}
        </p>
     </article>
     </li>`;
    return cardList
}

console.dir(kittenData.kittenName);
console.log(renderKitten(kittenData));

/*const list = document.querySelector(".list");
const kittenImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName = "Anastacio";
const kittenRace = "British Shorthair";
const kittenDesc = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle";


const kittenImage2 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName2 = "Anastacio";
const kittenRace2 = "British Shorthair";
const kittenDesc2 = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle";




const kittenImage3 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName3 = "Fiona";
const kittenDesc3 =
    "Ruiseño, juguetón, cariñoso le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace3 = "British Shorthair";


const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;
if (kittenDesc.includes(descrSearchText)) {
    list.innerHTML += `<li class="card">
<article>
    <img class="card_img" src=${kittenImage} alt="gatito" />
    <h3 class="card_title">${kittenName}</h3>
    <h4 class="card_race">${kittenDesc}</h4>
    <p class="card_description">
        ${kittenRace}
    </p>
</article>
</li>`;
}

if (kittenDesc2.includes(descrSearchText)) {
    list.innerHTML += `<li class="card">
    <article>
        <img class="card_img" src=${kittenImage2} alt="gatito" />
        <h3 class="card_title">${kittenName2}</h3>
        <h4 class="card_race">${kittenDesc2}</h4>
        <p class="card_description">
            ${kittenRace2}
        </p>
    </article>
    </li>`;
}

if (kittenDesc3.includes(descrSearchText)) {
    list.innerHTML += `<li class="card">
    <article>
        <img class="card_img" src=${kittenImage3} alt="gatito" />
        <h3 class="card_title">${kittenName3}</h3>
        <h4 class="card_race">${kittenDesc3}</h4>
        <p class="card_description">
            ${kittenRace3}
        </p>
    </article>
    </li>`;

}

/*const plus1 = document.querySelector(".js_plus");
plus1.addEventListener("click" , (event) => {
   if(form.classList.contains("collapsed")) {
    form.classList.remove("collapsed");
   } else {
    form.classList.add("collapsed");
   }
});
const plus1 = document.querySelector(".js_plus");

function main() {
    if (form.classList.contains("collapsed")) {
        showNewCatForm()
    } else {
        hideNewCatForm()
    }
}

function showNewCatForm() {
    form.classList.remove('collapsed');
}
function hideNewCatForm() {
    form.classList.add('collapsed');
}

plus1.addEventListener("click", main);


const buttonCancelForm = document.querySelector('.js-btn-cancel');
const imgForm = document.querySelector(".js-img");
const nameForm = document.querySelector(".js-name");
const razaForm = document.querySelector(".js-raza");
const descForm = document.querySelector(".js-desc");

const cancelNewKitten = (event) => {
    event.preventDefault();
    form.classList.add('collapsed');
    imgForm.value = " ";
    nameForm.value = " ";
    razaForm.value = " ";
    descForm.value = " ";
    completa o mueve el código para cancelar la creación de un nuevo gatito.
};
buttonCancelForm.addEventListener('click', cancelNewKitten);*/





