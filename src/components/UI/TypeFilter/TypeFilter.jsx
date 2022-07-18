import React, {useContext} from 'react';
import {Context} from "../../../index";
import {toJS} from "mobx";
import MyAccordion from "../MyAccordion/MyAccordion";
import MyRadio from "../MyRadio/MyRadio";
import Loader from "../Loader/Loader";
import {observer} from "mobx-react-lite";
import SelectedFilterValue from "../SelectedFilterValue/SelectedFilterValue";

const TypeFilter = observer(() => {
    const {product} = useContext(Context)
    const types = toJS(product.types)
    const selectedType = types.filter(value => value.id === product.selectedType)[0]

    const typeOnChange = (id) => {
        product.setSelectedType(id)
    }

    const deleteFilter = () => {
        product.setSelectedType(null)
    }

    return (
        <div style={{marginBottom: 10}}>
            <MyAccordion
                toggleValue="type"
            >
                {types.length === 0
                    ?
                    <Loader size={32}/>
                    :
                    types.map(type => {
                        return (
                            <MyRadio
                                color="#7971ea"
                                name="type"
                                value={type.type}
                                label={type.type}
                                onChange={() => typeOnChange(type.id)}
                                key={type.id + Date.now()}
                            />
                        )
                    })
                }
            </MyAccordion>
            {selectedType
                ?
                <SelectedFilterValue
                    onClick={deleteFilter}
                >
                    {selectedType.type}
                </SelectedFilterValue>
                :
                ''
            }
        </div>
    );
});

export default TypeFilter;