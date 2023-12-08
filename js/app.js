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
})

app.mount('#myApp')