import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const app = createApp({
  // data: all the data for the app
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Crown",
          price: 299.99,
          image: "media/crownProduct.png",
          description: "Luxury crown for formal wear.",
        },
        {
          id: 2,
          name: "Royal Soap",
          price: 499.99,
          image: "media/soap-small.jpg",
          description: "Luxurious handcrafted soap with natural ingredients.",
        },
        {
          id: 3,
          name: "Fancy Suit",
          price: 475.99,
          image: "media/fancySuit.webp",
          description: "An elegant suit for special occasions.",
        },
      ],
    };
  },
});
// optional export if you’re using modules
export default app;