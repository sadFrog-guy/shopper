import React, {useContext} from 'react';
import {Context} from "../../../index";
import {toJS} from "mobx";
import Loader from "../Loader/Loader";
import MyRadio from "../MyRadio/MyRadio";
import MyAccordion from "../MyAccordion/MyAccordion";
import {observer} from "mobx-react-lite";
import SelectedFilterValue from "../SelectedFilterValue/SelectedFilterValue";

const BrandFilter = observer(() => {
    const {product} = useContext(Context)
    const brands = toJS(product.brands)
    const selectedBrand = brands.filter(value => value.id === product.selectedBrand)[0]

    const brandOnChange = (id) => {
        product.setSelectedBrand(id)
    }

    const deleteFilter = () => {
        product.setSelectedBrand(null)
    }

    return (
        <div>
            <MyAccordion
                toggleValue="brand"
            >
                {brands.length === 0
                    ?
                    <Loader size={32}/>
                    :
                    brands.map(brand => {
                        return (
                            <MyRadio
                                color="#7971ea"
                                name="brand"
                                value={brand.brand}
                                label={brand.brand}
                                onChange={() => brandOnChange(brand.id)}
                                key={brand.id + Date.now()}
                            />
                        )
                    })
                }
            </MyAccordion>
            {selectedBrand
                ?
                <SelectedFilterValue
                    onClick={deleteFilter}
                >
                    {selectedBrand.brand}
                </SelectedFilterValue>
                :
                ''
            }
        </div>
    );
});

export default BrandFilter;