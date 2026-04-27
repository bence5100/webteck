// Elemek kiválasztása a DOM-ból
const inputMezo = document.getElementById('todoInput');
const hozzaadasGomb = document.getElementById('addButton');
const lista = document.getElementById('todoList');

// Funkció az új elem hozzáadásához
function ujElemHozzaadasa() {
    const szoveg = inputMezo.value.trim();

    // Csak akkor adjuk hozzá, ha nem üres a mező
    if (szoveg !== "") {
        const li = document.createElement('li');
        li.textContent = szoveg;

        // Kattintás esemény: áthúzás kapcsolása (toggle)
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        lista.appendChild(li);
        inputMezo.value = ""; // Mező ürítése
        inputMezo.focus();    // Fókusz visszahelyezése
    }
}

// Kattintás esemény a gombra
hozzaadasGomb.addEventListener('click', ujElemHozzaadasa);

// Enter billentyű támogatása a kényelemért
inputMezo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        ujElemHozzaadasa();
    }
});