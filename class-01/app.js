var root = new Vue({
    el: '#root',
    data: {
        message: 'Hello Vue.js!',
        img: 'https://www.w3schools.com/html/pic_trulli.jpg',
        alt: 'Boolean Careers',
        link: 'https://www.boolean.careers/',
        color: 'red',
        style: {
            color: 'gray',
            fontSize: '30px'
            },
        classes: ['one', 'two'],
        //array
        myArray: ['two', 'three'],
        //object
        myObject: {
            one: 'one',
            two: 'two', 
            three: 'three'
            },
        dollar: 20,
        log: {
            x:0,
            y:0
        }
    },

    methods: {
        changeColor: function () {
            this.color = 'green'
        },
        Myage: function () {
            var date = new Date();
            var year = date.getFullYear();
            var myAge = year - 2000;
            return myAge;
        },
        Myname(){
            var name = 'Azizul Haque';
            return name;
        },
        Mymessage(age){
            return `${this.message} How are you?? I want to start with you!!! and my age ${age}`
        },
        Mydollar(){
            return `${this.dollar} $`
        },
        Amount(taka){
            this.dollar += taka
        },
        Greet: function (event) {
            console.log(event)
        },
        Submit(event) {
            console.log(event)
        },

        over(event) {
            this.log.x = event.offsetX
            this.log.y = event.offsetY
        }


    },


    
})