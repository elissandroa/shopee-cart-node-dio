
/* Adicionar item no carrinho */
async function addItem(userCart, item) {
    userCart.push(item);
}

/* Mostrar Items do carrinho */
async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)}  | ${item.quantity}X | Subtotal = ${item.subtotal()}`)
    })
}

/* Calcular o total do carrinho */
async function caculateTotal(userCart) {
    console.log('\nShopee Cart TOTAL IS:')
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    return result.toFixed(2);
}

/* Deletar item do carrinho */
async function deleteItem(userCart, name) { 
    const index = userCart.findIndex((item) => item.name === name);

    if(index ==! -1){
        userCart.splice(index, 1);
    }
}

/* Remover um item - Diminuir um item*/
async function removeItem(userCart, index) { }


export {
    addItem,
    caculateTotal,
    deleteItem, 
    removeItem,
    displayCart,
}