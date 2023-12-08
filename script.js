var lista = document.getElementById("lista");
var inserirTarefa = document.getElementById("novaTarefa");

function addTask() {
    var novaTarefa = document.createElement("li");
    novaTarefa.innerText = inserirTarefa.value;
    inserirTarefa.value = "";
    novaTarefa.addEventListener("click", marcar);
    var deleta = document.createElement("span");
    deleta.innerText = "X";
    deleta.addEventListener("click", deletar);
    novaTarefa.appendChild(deleta);
    lista.appendChild(novaTarefa);
}

function marcar(event) {
    event.target.classList.toggle("done");
}

function deletar(event) {
    event.stopPropagation();
    event.target.parentElement.remove();
}