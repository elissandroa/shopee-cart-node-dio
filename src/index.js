import createItem from "./services/ItemService.js";
import * as cartService from './services/cartService.js'

const myCart = [];
const myWishList = [];



console.log('Welcome to the Shopee Cart ')

const item1 = await createItem("HD 500", 30.25, 8);
const item2 = await createItem("HD 320", 12.00, 5);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

console.log('Shopee Cart TOTAL IS:')
console.log("Carrinho:", await cartService.caculateTotal(myCart));
console.log("Lista de Desejos:", await cartService.caculateTotal(myWishList));
