const form = document.querySelector("#sightingForm");
const count = document.querySelector("#count");

function displayCount() {
const sightings =
JSON.parse(localStorage.getItem("sightings")) || [];

count.textContent =
    `Total Sightings Submitted: ${sightings.length}`;

}

displayCount();

form.addEventListener("submit", (event) => {
event.preventDefault();

const sighting = {
    name: document.querySelector("#name").value,
    bird: document.querySelector("#bird").value,
    location: document.querySelector("#location").value
};

const sightings =
    JSON.parse(localStorage.getItem("sightings")) || [];

sightings.push(sighting);

localStorage.setItem(
    "sightings",
    JSON.stringify(sightings)
);

document.querySelector("#message").textContent =
    "Sighting saved successfully!";

form.reset();

displayCount();

});