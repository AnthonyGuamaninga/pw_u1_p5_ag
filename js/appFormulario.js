console.log("elementos Vue");
console.log(Vue);
 
const estudiantes = [{ nombre: "Anthony", apellido: "Guamaninga", hobby: "futbol", genero: "M", pais: "Ecuador" },
{ nombre: "Daniel", apellido: "Torres", hobby: "música", genero: "M", pais: "Ecuador" },
{ nombre: "Carlos", apellido: "Casa", hobby: "cantar", genero: "M", pais: "Ecuador" },
{ nombre: "Juan", apellido: "Doler", hobby: "bailar", genero: "M", pais: "Ecuador" },
{ nombre: "Diego", apellido: "Canva", hobby: "billar", genero: "M", pais: "Ecuador" }]
 
console.log(estudiantes)
console.table(estudiantes)
 
const app = Vue.createApp({
    /*template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7,8]}}</p>
    <p>{{true?'verdadero':'falso'}}</p>
    `*/
    methods: {
        
        agregarEstudiante() {
            console.log(this.nombre)
            const estu = { nombre: this.nombre, apellido: this.apellido, hobby: this.hobby, genero: this.genero, pais: this.pais }
            //this.lista.unshift(estu)
            this.lista.push(estu)
        }
    },
    watch: {
 
    },
    data() {
        return {
            nombre: null,
            apellido: null,
            hobby: null,
            genero: null,
            pais: null,
            lista: estudiantes
        }
    }
})
 
app.mount('#appFormulario')