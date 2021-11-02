const db = firebase.firestore();

const tableContainer = document.getElementById("table-container");

const getDatos = () => db.collection("tasks").get();
const onGetDatos = (callback) => db.collection("informacion").onSnapshot(callback);
const getTask = (id) => db.collection("tasks").doc(id).get();

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetDatos((querySnapshot) => {
    tableContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      tableContainer.innerHTML += `
        <tr>
          <td>${data.nombre}</td>
          <td>${data.apellido}</td>
          <td>${data.telefono}</td>
          <td>${data.area}</td>
          <td>${data.email}</td>
          <td>${data.fecha}</td>
          <td>${data.hora}</td>
        </tr>`;
    });
  });
});

const cerrarSesion = document.getElementById("cerrarSesion");
const auth = firebase.auth();

cerrarSesion.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location.href = "index.html";

  });
});