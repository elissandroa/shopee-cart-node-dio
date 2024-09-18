const cart = [];

import createItem from "./services/ItemService.js";

console.log('Welcome to the Shopee Cart ')

const item1 = await createItem("HD 500", 30.25, 3);
const item2 = await createItem("HD 320", 12.00, 1);

