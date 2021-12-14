const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product : 'socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color: 'green', image:'./assets/images/socks_green.jpg'},
                {id:2235, color: 'blue', image:'./assets/images/socks_blue.jpg'},
             ]
         }
    },
    methods:{
        addToCart(){
            this.cart +=1; //aumenta el valor de uno en uno
        },
        updateImage(variantImage){
            this.image = variantImage;
        }

    }
})