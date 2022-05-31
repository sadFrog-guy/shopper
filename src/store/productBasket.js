import {makeAutoObservable} from "mobx";

class ProductBasket {
    constructor() {
        this.productsInBasket = []
        this.selectedProductId = 0
        this.selectedAmount = 0
        this.selectedSize = 0

        makeAutoObservable(this)
    }

    setProductsInBasket(product) {
        this.productsInBasket.push(product)
    }

    setSelectedProductId(productId) {
        this.selectedProductId = productId
    }

    setSelectedAmount(amount) {
        this.selectedAmount = amount
    }

    setSelectedSize(size) {
        this.selectedSize = size
    }
}

export default ProductBasket