
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

    if (index == ! -1) {
        userCart.splice(index, 1);
    }
}

/* Remover um item - Diminuir um item*/
async function removeItem(userCart, index) {
    const deleteIndex = index - 1;
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

/* Diminuir um item do carrinho */
async function decreeseItem(userCart, item) {
    /*1. Encontrar o índice do item */
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log(indexFound);

    /*2. Caso item não seja econtrado */
    if(indexFound === -1){
        console.log('Item não encontrado!')
        return;
    }

    /* 3. Item > 1 subtrair um item */
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    /* 4. Caso item = 1 deletar o item */
    if(userCart[indexFound].quantity === 1) {
       userCart.splice(indexFound, 1);
       return;
    }
}


export {
    addItem,
    caculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    decreeseItem,
}