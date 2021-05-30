const app = Vue.createApp({
    data(){
        return{
            cart: 10,
            qty: 0,
            selectedEvent:0,
            events: [
                { id: 1, title: 'Chivo: Soen', 'description': 'Una de las bandas de metal más legendarias de Noruega visitan nuestro país en busca de brindar un gran espectáculo, Soen los destructores del tiempo prometen dar el espectaculo de sus vidas, un espectaculo no apto para menores', category: 'música', image: './img/cards/event1.jpg', free: true, espacios: 200, atp: false, date: 'Thu, May 20, 2021, 1:00 PM CST', location: 'San José' },
                { id: 2, title: 'Orquesta Sinfónica Nacional de Costa Rica: XI Concierto de Temporada Virtual ', 'description':'Gran conciento virtual de la Orquesta Sinfonica de Costa Rica, un evento para toda la famia. La Orquesta Sinfónica Nacional de Costa Rica (OSN) es una institución pública cultural costarricense, adscrita al Centro Nacional de Música, órgano parte del Ministerio de Cultura y Juventud de Costa Rica. Tiene su sede en la ciudad de San José. Su objetivo es la difusión de la música clásica, así como del canto coral y las artes líricas, además de encargarse de la formación instrumental en este país.',category: 'música', image: './img/cards/event2.jpg', free: false, espacios: 200, atp: true, date: 'Tue, May 18, 2021, 6:00 PM UTC', location: 'Alajuela' },
                { id: 3, title: 'Concierto con Chet Faker', 'description':'Nicholas James Murphy (born 23 June 1988), known professionally as Chet Faker, is an Australian singer and songwriter. In 2012, as Chet Faker, he issued an extended play, Thinking in Textures, and signed to Downtown Records in the United States.', category: 'música', image: './img/cards/event3.jpg', free: false, espacios: 200, atp: true, date: 'Thu, May 20, 2021, 1:00 PM CST', location: 'San José'},
                { id: 4, title: 'The big three: Silent theater', 'description':'Nicholas James Murphy (born 23 June 1988), known professionally as Chet Faker, is an Australian singer and songwriter. In 2012, as Chet Faker, he issued an extended play, Thinking in Textures, and signed to Downtown Records in the United States.', category: 'Teatro', image: './img/cards/event4.jpg', free: true, espacios: 50, atp: true, date: 'Thu, May 20, 2021, 1:00 PM CST', location: 'San José'},
              ]
        }
    },
    methods:{
        showEventDetails(index){
            //console.log("INDEX -> " + index);
            this.selectedEvent = index;
    
        },
        addToCart(){
            this.cart += Number(this.qty);
        },
        removeFromCart(){
            
            
        },
        closeModal(){
            
        }
        
    }
});