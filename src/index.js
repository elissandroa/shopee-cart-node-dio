import createItem from "./services/ItemService.js";
import * as cartService from './services/cartService.js'

const myCart = [];
const myWishList = [];



console.log('Welcome to the Shopee Cart ')

const item1 = await createItem("HD 500", 30.25, 8);
const item2 = await createItem("HD 320", 12.00, 2);
const item3 = await createItem("HD 1TB", 100.00, 3);
const item4 = await createItem("HD 2TB", 250.00, 5);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.deleteItem(myCart, item1.name)
await cartService.displayCart(myCart);

console.log("🎁Total:", await cartService.caculateTotal(myCart));


