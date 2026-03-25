//
// File: app.js
// Author: Nagy Áron
// Copyright: 2026, Nagy Áron
// Group: Szoft I-N
// Date: 2026-03-25
// Github: https://github.com/lopnifox/
// Licenc: MIT
//

document.getElementById("calc").addEventListener("click", function () {
    console.log("Számítás gomb megnyomva");
    
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let heightmeter = height / 100;
    let bmi = calculateBMI(weight, heightmeter);

    if (isNaN(bmi) || weight <= 0 || height <= 0) {
        document.getElementById("bmi").value = "Helytelen érték(ek)!"
        console.log("Helytelen érték");
        return;
    }

    document.getElementById("bmi").value = bmi
});