import {makeAutoObservable} from "mobx";

class ProductStore {
    constructor() {
        this.products = []
        this.product = {}
        this.last = {}
        this.brands = []
        this.types = []
        this.selectedBrand = ''
        this.selectedType = ''
        this.selectedPrice = 0
        this.selectedCategory = ''
        this.totalCount = 0
        this.page = 1
        this.limit = 6

        makeAutoObservable(this)
    }

    get getLast() {
        return this.last
    }

    setProducts(products) {
        this.products = products
    }
    setProduct(product) {
        this.product = product
    }
    setLast(product) {
        this.last = product
    }
    setBrands(brands) {
        this.brands = brands
    }
    setTypes(types) {
        this.types = types
    }
    setSelectedBrand(brand) {
        this.selectedBrand = brand
    }
    setSelectedType(type) {
        this.selectedType = type
    }
    setSelectedCategory(category) {
        this.selectedCategory = category
    }
    setSelectedPrice(price) {
        this.selectedPrice = price
    }
    setPage(page) {
        this.page = page
    }
    setTotalCount(count) {
        this.totalCount = count
    }
    setLimit(limit) {
        this.limit = limit
    }
    setSelectedAmount(amount) {
        this.selectedAmount = amount
    }
    setSelectedSize(size) {
        this.selectedSize = size
    }
}

export default ProductStore