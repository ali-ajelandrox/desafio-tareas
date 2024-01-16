let total = document.querySelector("#total");
let realizada = document.querySelector("#realizada");
let clave = document.querySelector("#clave");
let tarea = document.querySelector("#tarea");
let btn = document.querySelector("#agregar");
let nvatarea = document.querySelector("#nvatarea");
let suma = document.querySelector("#suma");


const tareasIniciales = [
    { id: 1, tarea: "cepillarse los dientes", realizada: false },
    { id: 2, tarea: "bañarse", realizada: false },
    { id: 3, tarea: "comer", realizada: false },
];

const tareasNuevas = [...tareasIniciales];

actualizarListas();

btn.addEventListener("click", () => {
    let nuevatarea = { id: generarNumeroAleatorio(), tarea: nvatarea.value, realizada: false };
    tareasNuevas.push(nuevatarea);
    nvatarea.value = "";

    actualizarListas();
});

function borrar(id) {
    tareasNuevas.splice(tareasNuevas.findIndex(t => t.id === id), 1);
    actualizarListas();
}


function marcarRealizada(id) {
    let tarea = tareasNuevas.find(t => t.id === id);
    tarea.realizada = !tarea.realizada;
    actualizarListas();
}


function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10000);
}

function actualizarListas() {
    let modificar = "";
    let tareasRealizadas = 0;

    for (let tarea of tareasNuevas) {
        modificar += `<li style=" list-style:none" >${tarea.tarea}
        <input type="checkbox" class="form-check-input" type="radio"  ${tarea.realizada ? 'checked' : ''} onchange="marcarRealizada(${tarea.id})">
        <button class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})">X</button></li>`;

        if (tarea.realizada) {
            tareasRealizadas++;
        }
    }
    tarea.innerHTML = modificar;


    let modificarid = "";
    for (let tarea of tareasNuevas) {
        modificarid += `<li style=" list-style:none" >${tarea.id}</li>`;
    }
    clave.innerHTML = modificarid;

  
    total.textContent = `Tareas realizadas: ${tareasRealizadas}`;

    suma.textContent = `Totales: ${tareasNuevas.length}`;
}
