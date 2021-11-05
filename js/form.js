
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

// const loginPage =  document.getElementById('login-page');

// loginPage.onclick = gologinPage; // Agrega función onclick al elemento
  
// function gologinPage() {
//   window.location.href = "login.html";

// }


const areonautica =  document.getElementById('aeronauticaButton');

areonautica.onclick = areonauticaButton; // Agrega función onclick al elemento
  
function areonauticaButton() {
  document.getElementById('ciudad_de_residencia').value='Aeronáutica'
}



const agricola =  document.getElementById('agricolaButton');

agricola.onclick = agricolaButton; // Agrega función onclick al elemento
  
function agricolaButton() {
  document.getElementById('ciudad_de_residencia').value='Agricola'
}


const alimentaria =  document.getElementById('alimentariaButton');

alimentaria.onclick = alimentariaButton; // Agrega función onclick al elemento
    
function alimentariaButton() {
  document.getElementById('ciudad_de_residencia').value='Alimentaria'
}



const pesca =  document.getElementById('pescaButton');

pesca.onclick = pescaButton; // Agrega función onclick al elemento
    
function pescaButton() {
  document.getElementById('ciudad_de_residencia').value='Pesca y Acuicultura'
}


const turismo =  document.getElementById('turismoButton');

turismo.onclick = turismoButton; // Agrega función onclick al elemento
    
function turismoButton() {
  document.getElementById('ciudad_de_residencia').value='Turismo Rural'
}


const veterinaria =  document.getElementById('veterinariaButton');

veterinaria.onclick = veterinariaButton; // Agrega función onclick al elemento
    
function veterinariaButton() {
  document.getElementById('ciudad_de_residencia').value='Veterinaria'
}

