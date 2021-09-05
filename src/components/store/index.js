import { createStore } from "vuex";
const store = createStore({
    state() {
        return {
            cart: [],
            items: {
                1: {
                    name: "Margherita",
                    description: "بيتزا لذيذة من الطماطم مغطاة بجبنة الموزاريلا ",
                    options: [{
                            size: 9,
                            price: 6,
                        },
                        {
                            size: 12,
                            price: 10,
                        },
                    ],
                },
                2: {
                    name: "Pepperoni",
                    description: "بيتزا لذيذة  من الطماطم مغطاة بجبنة الموزاريلا والبيبروني ",
                    options: [{
                            size: 9,
                            price: 7,
                        },
                        {
                            size: 12,
                            price: 12,
                        },
                    ],
                },
                3: {
                    name: "Ham and Pineapple",
                    description: "بيتزا لذيذة من الطماطم مغطاة بجبنة الموزاريلا ولحم الماعز والأناناس ",
                    options: [{
                            size: 9,
                            price: 7,
                        },
                        {
                            size: 12,
                            price: 12,
                        },
                        {
                            size: 15,
                            price: 18,
                        },
                    ],
                },
            },
        };
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(payload);
        },
    },
    actions: {
        removeItem(state, payload) {
            const data = {...payload };
            state.cart.push(data);
        },
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        cartData(state) {
            return state.cart;
        },
    },
});

export default store;