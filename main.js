const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product : 'socks',
            brand: 'My super Brand',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity:50},
                {id:2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity:0},
             ]
         }
    },
    methods:{}


})