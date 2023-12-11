console.log("elementos Vue");
console.log(Vue);

const app = Vue.createApp({
    /*template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7,8]}}</p>
    <p>{{true?'verdadero':'falso'}}</p>
    `*/
    // OPTIONS API
    methods: {
        cambiarMensaje(){
            console.log("Se está cambiando el mensaje")
            console.log(this.mensaje)
            this.mensaje='Valor cambiado tal'
            console.log(this.mensaje);
        },
        cambiarNumero(){
            
        }
    },
    watch: {

    },
    data(){
        return{
            mensaje: 'Hola mundo desde Vue.JS',
            valor: 100
        }
    }
})

app.mount('#myApp')