import React, {useContext, useEffect} from 'react';
import MySelect from "../MySelect/MySelect";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import useSort from "../../../hooks/useSort";

const SortButton = observer(() => {
    const {product, sort} = useContext(Context)
    const products = toJS(product.products)

    useEffect(() => {
        switch (sort.selectedSort) {
            case 'newest':
                product.setProducts(sortedByNewest)
                break;
            case 'oldest':
                product.setProducts(sortedByOldest)
                break;
            case 'price':
                product.setProducts(sortedByPrice)
                break;
            case 'name':
                product.setProducts(sortedByName)
                break;
        }
    }, [sort.selectedSort])

    const sortedByNewest = useSort(
      products,
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      sort.selectedSort
    )

    const sortedByOldest = useSort(
      products,
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      sort.selectedSort
    )

    const sortedByPrice = useSort(
      products,
        (a, b) => b.price - a.price,
      sort.selectedSort
    )

    const sortedByName = useSort(
      products,
      (a, b) => a.name.localeCompare(b.name),
      sort.selectedSort
    )

    return (
        <MySelect
            options={[
                {name: "Newest", key: "newest"},
                {name: "Oldest", key: "oldest"},
                {name: "Price", key: "price"},
                {name: "Alphabet", key: "name"},
            ]}
        >
            Sort by
        </MySelect>
    );
});

export default SortButton;