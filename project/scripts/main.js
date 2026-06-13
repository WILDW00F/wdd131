const month = new Date().getMonth();

let migrationSeason;

if (month >= 2 && month <= 4) {

    migrationSeason = "Spring Migration";

}
else if (month >= 8 && month <= 10) {

    migrationSeason = "Fall Migration";

}
else {

    migrationSeason = "Non-Peak Migration";

}

document.querySelector("#season").textContent =
migrationSeason;