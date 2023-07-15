import { getShoppingCart } from "./fakedb";

const cartDataloader = async() => {
    const response = await fetch('products.json');
    const products = await response.json();


    const savedCartId = getShoppingCart();
    let savedCart = [];
    for (const id in savedCartId) {
        const matchedProduct = products.find(pd => pd.id == id);
        if(matchedProduct) {
            const quantity = savedCartId[id];
            // console.log(quantity);
            matchedProduct.quantity = quantity;
            savedCart.push(matchedProduct)
        }
    }
    return savedCart;
}

export default cartDataloader;