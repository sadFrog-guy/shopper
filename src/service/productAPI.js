import {$host} from "./baseURL";
import axios from "axios";

export const fetchBrands = async() => {
    const brands = await $host.get('/api/brand')
    return brands
}

export const fetchOneBrand = async(id) => {
    const brand = await $host.get(`/api/brand/${id}`)
    return brand
}

export const createBrand = async(brand) => {
    const createdBrand = await $host.post('/api/brand', brand)
    return createdBrand
}

export const fetchTypes = async() => {
    const types = await $host.get('/api/type')
    return types
}

export const fetchOneType = async(id) => {
    const type = await $host.get(`/api/type/${id}`)
    return type
}

export const createType = async(type) => {
    const createdType = await $host.post('/api/type', type)
    return createdType
}

export const fetchProducts = async(typeId, brandId, price, gender, page, limit= 9) => {
    const products = await $host.get('/api/product', {params: {
            typeId, brandId, price, gender, page, limit
        }})
    return products
}

export const fetchOneProduct = async(id) => {
    const product = await $host.get(`/api/product/${id}`)
    return product
}

export const fetchLastProduct = async() => {
    const product = await $host.get(`/api/product/last`)
    return product
}

export const createProduct = async(product) => {
    const createdProduct = await $host.post('/api/product/', product)
    return createdProduct
}

export const updateProduct = async(product) => {
    const updatedProduct = await $host.put('/api/product', product)
    return updatedProduct
}

export const deleteProduct = async(id) => {
    const deletedProduct = await $host.delete(`/api/product/${id}`)
    return deletedProduct
}