/*Zadatak 3:

a)
Dodati na HTML stranicu combo box (select) sa proizvoljnim vrednostima i dodati jos jedno tekstualno polje. Javascriptom omoguciti da kad se promeni vrednost u selectu, ta 
ista vrednost se upise u tekstualno polje koje se nalazi na stranici.

b)
Dodati na stranicu jos jednu dugme koje sadrzaj koji se nalazi u tekstuelnom polju
upisuje u header h2, koji se nalazi na stranici sa id-em “secret” a inicijalno je sakriven.*/

// Dohvatimo elemente iz DOM-a
const comboBox = document.getElementById('comboBox');
const textBox = document.getElementById('textBox');
const submitButton = document.getElementById('submitButton');
const secretHeader = document.getElementById('secret');

// Postavimo event listener za promenu vrednosti u select-u
comboBox.addEventListener('change', function() {
    // Postavimo vrednost teksta polja na vrednost iz select-a
    textBox.value = comboBox.value;
});

// Postavimo event listener za klik na dugme
submitButton.addEventListener('click', function() {
    // Dohvatimo sadržaj tekstualnog polja
    const textValue = textBox.value;
    
    // Postavimo sadržaj header-a h2 na sadržaj tekstualnog polja
    secretHeader.innerText = textValue;

    // Prikazemo header h2 ako nije već prikazan
    secretHeader.style.display = 'block';
});

