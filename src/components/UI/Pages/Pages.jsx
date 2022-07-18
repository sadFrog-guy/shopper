import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {PageItem, Pagination} from "react-bootstrap";
import {Context} from "../../../index";
import {fetchProducts} from "../../../service/productAPI";
import './Pages.module.css'

const Pages = observer(() => {
    const {product} = useContext(Context)
    const pageCount = Math.ceil(product.totalCount / product.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    useEffect(() => {
        fetchProducts(
            product.selectedType,
            product.selectedBrand,
            product.selectedPrice || 9999,
            product.selectedCategory,
            product.page,
            product.limit
        ).then(data => {
            product.setProducts(data.data.rows)
            product.setTotalCount(data.data.count)
        })
    }, [product.page])

    return (
        <>
            <style type="text/css">
                {`
                    .page-item.active .page-link {
                        background-color: #7971EA;
                    }
                    
                    .page-link {
                        color: #7971EA;
                    }
                `}
            </style>

            <Pagination className="justify-content-center">
                {pages.map(page => {
                    return (
                        <PageItem
                            key={page}
                            active={product.page === page}
                            onClick={() => {
                                product.setPage(page)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }}
                        >
                            {page}
                        </PageItem>
                    )
                })}
            </Pagination>
        </>
    );
});

export default Pages;