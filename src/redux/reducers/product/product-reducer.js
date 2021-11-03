import products from "./product-data";

const productReducer = (state=products, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

export default productReducer;