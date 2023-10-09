const myForm = document.getElementById('myForm');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const jmbg = document.getElementById('jmbg');

myForm.addEventListener('submit', function (event) {
    if (!ime.value || !prezime.value || !jmbg.value) {
        event.preventDefault(); // Zabrani submit ako nisu popunjena sva polja
        if (!ime.value) {
            ime.focus();
        } else if (!prezime.value) {
            prezime.focus();
        } else {
            jmbg.focus();
        }
    }
});

myForm.addEventListener('submit', function (event) {
    const imeValue = ime.value;
    const prezimeValue = prezime.value;
    const jmbgValue = jmbg.value;

    const imeRegex = /^[A-Z][a-z]*$/; // Veliko početno slovo i mala slova za ostatak
    const jmbgRegex = /^\d{13}$/; // Tačno 13 cifara

    if (!imeRegex.test(imeValue) || !imeRegex.test(prezimeValue) || !jmbgRegex.test(jmbgValue)) {
        event.preventDefault(); // Zabrani submit ako format nije ispravan
        if (!imeRegex.test(imeValue)) {
            ime.focus();
        } else if (!imeRegex.test(prezimeValue)) {
            prezime.focus();
        } else {
            jmbg.focus();
        }
    }
});


const tipVozilaRow = document.getElementById('tipVozilaRow');
const ekoKlasa = document.getElementById('ekoKlasa');

tipVozilaRow.addEventListener('mouseenter', function () {
    ekoKlasa.style.display = 'block';
});

tipVozilaRow.addEventListener('mouseleave', function () {
    ekoKlasa.style.display = 'none';
});


const tipVozila = document.getElementById('tipVozila');

tipVozila.addEventListener('change', function () {
    if (tipVozila.value === 'Elektricno') {
        ekoKlasa.style.color = 'green';
    } else if (tipVozila.value === 'Motorno') {
        ekoKlasa.style.color = 'red';
    }
});


/*<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $ime = $_POST["ime"];
    $prezime = $_POST["prezime"];
    $jmbg = $_POST["jmbg"];
    $tipVozila = $_POST["tipVozila"];
    
    // Ovde unosite logiku za unos podataka u tabelu na drugoj stranici
    // Na primer, možete koristiti SQL za unos u bazu podataka ili generisati HTML za tabelu
}
?>
*/