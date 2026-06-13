const weatherSelect =
document.querySelector("#weatherSelect");

const output =
document.querySelector("#weatherOutput");

weatherSelect.addEventListener("change", () => {

const value = weatherSelect.value;

if (value === "wind") {

    output.textContent =
    "Tailwinds help birds travel farther during migration.";

}
else if (value === "temperature") {

    output.textContent =
    "Temperature changes often trigger migration timing.";

}
else {

    output.textContent =
    "Storms may force birds to change routes or delay travel.";

}

});