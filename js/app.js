console.log("elementos Vue");
console.log(Vue);

const estudiantes = [{nombre:'Alfred',apellido:'Guamaninga'},
{nombre:'Joel',apellido:'Torres'},
{nombre:'Valeria',apellido:'Padilla'},
{nombre:'Brenda',apellido:'Lour'},
{nombre:'Gabriel',apellido:'Jacome'}]
console.log(estudiantes);
console.table(estudiantes)



const app = Vue.createApp({
    /*template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7,8]}}</p>
    <p>{{true?'verdadero':'falso'}}</p>
    `*/
    // OPTIONS API

    methods:{
        cambiarMensaje(){
            console.log("Se esta cambiando el mensaje")
            console.log(this.mensaje)
            this.mensaje="Valor cambiado"
        },
        cambiarNumero(){
            this.valor+=1
        },
        agregarEstudiante(){
            console.log('Agregando estudiante');
            this.lista.push({nombre:this.nombre , apellido:this.apellido})
        },
        presionandoTecla(event){
            console.log('presionando...');
            console.log(event.charCode);
        },
        presionandoEnter(event){
            if(event.charCode===13){
                console.log('agregando ingreso');
                this.agregarEstudiante()
            }
            
        },
        editarEstudiante(){
            console.log('editando estudiante ...');
            const estu = {nombre:this.nombre, apellido:this.apellido}
        }
    },
    watch:{
 
    },
    data(){
        return{
            mensaje:'Hola mundo desde Vue.js',
            valor:100,
            lista: estudiantes,
            nombre: null,
            apellido: null
        }
    }
})

app.mount('#myApp')