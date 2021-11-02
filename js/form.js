
// import firebase from "./firebase";

const db = firebase.firestore()
const formTask =  document.getElementById('form-task');

formTask.addEventListener('submit'  , async(e) => {
  e.preventDefault();
  const nombre = formTask['nombres'].value;
  const email = formTask['correo_electronico'].value;
  const apellido = formTask['apellido'].value;
  const telefono = formTask['telefono'].value;
  const area = formTask['ciudad_de_residencia'].value;
  const f = new Date();
  const fecha =
    f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
  const hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
  db.collection('informacion').doc().set({
    email , nombre , apellido , telefono , area , fecha , hora
  })
  // console.log(email)
  // console.log(response)
} )

const loginPage =  document.getElementById('login-page');

loginPage.onclick = gologinPage; // Agrega función onclick al elemento
  
function gologinPage() {
  window.location.href = "login.html";

}