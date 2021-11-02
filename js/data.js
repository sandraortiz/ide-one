const db = firebase.firestore();
const auth = firebase.auth();

new Vue({
  data() {
    return {
      name: '',
      usuarios: [],
  
    }
  },
  methods: {
    ExportExcel(type, fn, dl) {
      var elt = this.$refs.exportable_table;
      var wb = XLSX.utils.table_to_book(elt, { sheet: "Sheet JS" });
      return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || (("data" + '.' || 'SheetJSTableExport.') + (type || 'xlsx')));
    },
    cerrarSesion() {
      // e.preventDefault();
      auth.signOut().then(() => {
        window.location.href = "index.html";

      });
    },
    async obtenerDatos() {
      const onGetDatos = (callback) => db.collection("informacion").onSnapshot(callback);
      onGetDatos((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let usuario = doc.data();
          usuario.id = doc.id;
          this.usuarios.push(usuario);
        });
      });

    },
   
  },
  mounted() {
    this.obtenerDatos();
  },
}).$mount('#app')