import React, {useContext, useState} from 'react';
import Title from "../Title/Title";
import MyInput from "../MyInput/MyInput";
import MyTextarea from "../MyTextarea/MyTextarea";
import MySelect2 from "../MySelect2/MySelect2";
import MyModal from "../MyModal/MyModal";
import SplitItems from "../SplitItems/SplitItems";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {categories} from "../../../service/consts";
import MyButton from "../MyButton/MyButton";
import useInput from "../../../hooks/useInput";
import ColorPicker from "../ColorPicker/ColorPicker";
import SplittedItemWrapper from "../SplittedItemWrapper/SplittedItemWrapper";
import FileUpload from "../FileUpload/FileUpload";
import {createProduct, fetchProducts} from "../../../service/productAPI";
import logo from "../Logo/Logo";
import {observer} from "mobx-react-lite";

const AdminModal = observer(({setActive}) => {
    const {product} = useContext(Context)
    const types = toJS(product.types)
    const brands = toJS(product.brands)

    const [image, setImage] = useState(null)

    const data = {
        name: useInput('', {isEmpty: true, minLengthError: 3, maxLengthError: 12}),
        description: useInput('', {isEmpty: true, minLengthError: 120, maxLengthError: 1000}),
        color: useInput('', {isEmpty: true}),
        price: useInput(0, {isEmpty: true, maxNumberError: 9999}),
        brandId: useInput(0, {}),
        typeId: useInput(0, {}),
        gender: useInput('', {}),
    }

    const formOnSubmit = () => {
        const formData = new FormData()
        formData.append('name', data.name.value)
        formData.append('description', data.description.value)
        formData.append('color', data.color.value)
        formData.append('price', `${data.price.value}`)
        formData.append('brandId', data.brandId.value)
        formData.append('typeId', data.typeId.value)
        formData.append('gender', data.gender.value)
        formData.append('amount', '0')
        formData.append('size', 'all')
        formData.append('picture', image)
        createProduct(formData)
        fetchProducts(null, null, 1, 12).then(data => product.setProducts(data.data.rows))
    }

    return (
        <MyModal setActive={setActive}>
            <Title>Admin PAD</Title>
            <MyInput
                placeholder="Enter name"
                value={data.name.value}
                name="name"
                onChange={e => data.name.onChange(e)}
                onBlur={e => data.name.onBlur(e)}
            >
                Name
                {(data.name.isDirty && data.name.isEmpty)
                    && <span style={{color: 'tomato'}}>Field cannot be empty</span>}
                {(data.name.isDirty && data.name.minLengthError)
                    && <span style={{color: 'tomato'}}>Field cannot be shorter than 3 characters</span>}
                {(data.name.isDirty && data.name.maxLengthError)
                    && <span style={{color: 'tomato'}}>Field cannot be longer than 12 characters</span>}
            </MyInput>
            <MyTextarea
                placeholder="Enter description"
                value={data.description.value}
                name="description"
                onChange={e => data.description.onChange(e)}
                onBlur={e => data.description.onBlur(e)}
            >
                Description
                {(data.description.isDirty && data.description.isEmpty)
                    && <span style={{color: 'tomato'}}>Field cannot be empty</span>}
                {(data.description.isDirty && data.description.minLengthError)
                    && <span style={{color: 'tomato'}}>Field cannot be shorter than 120 characters</span>}
                {(data.description.isDirty && data.description.maxLengthError)
                    && <span style={{color: 'tomato'}}>Field cannot be longer than 640 characters</span>}
            </MyTextarea>
            <SplitItems style={{marginBottom: 15, marginTop: 15}}>
                <SplittedItemWrapper>
                    <MySelect2
                        label="Types"
                        defaultValue="Select type of product"
                        name="typeId"
                        value={data.typeId.value}
                        onChange={e => data.typeId.onChange(e)}
                    >
                        {types.map(type => {
                            return (
                                <option key={type.id} value={type.id}>
                                    {type.type}
                                </option>
                            )
                        })}
                    </MySelect2>
                </SplittedItemWrapper>
                <SplittedItemWrapper>
                    <MySelect2
                        label="Brands"
                        defaultValue="Select brand of product"
                        name="brandId"
                        value={data.brandId.value}
                        onChange={e => data.brandId.onChange(e)}
                    >
                        {brands.map(brand => {
                            return (
                                <option key={brand.id} value={brand.id}>
                                    {brand.brand}
                                </option>
                            )
                        })}
                    </MySelect2>
                </SplittedItemWrapper>
            </SplitItems>
            <SplitItems>
                <SplittedItemWrapper>
                    <MyInput
                        placeholder="Enter price"
                        name="price"
                        type="number"
                        value={data.price.value}
                        onChange={e => data.price.onChange(e)}
                        onBlur={e => data.price.onBlur(e)}
                    >
                        Price
                        {(data.price.isDirty && data.price.isEmpty)
                            && <span style={{color: 'tomato'}}>Field cannot be empty</span>}
                        {(data.price.isDirty && data.price.maxNumberError)
                            && <span style={{color: 'tomato'}}>Field cannot be more expensive than 9999</span>}
                    </MyInput>
                </SplittedItemWrapper>
                <SplittedItemWrapper>
                    <ColorPicker
                        value={data.color.value}
                        onChange={e => data.color.onChange(e)}
                        id={1}
                    />
                </SplittedItemWrapper>
            </SplitItems>
            <div style={{width: '100%'}}>
                <MySelect2
                    placeholder="..."
                    label="Category"
                    value={data.gender.value}
                    defaultValue={data.gender.value}
                    onChange={e => data.gender.onChange(e)}
                    name="gender"
                >
                    {categories.map(category => {
                        return (
                            <option key={category}>
                                {category}
                            </option>
                        )
                    })}
                </MySelect2>
            </div>
            <FileUpload
                onChange={e => {
                    setImage(e.target.files[0])
                }}
            >
                Choose product picture
            </FileUpload>
            <MyButton
                style={{width: '100%'}}
                disabled={
                    !data.name.inputValid
                    || !data.description.inputValid
                    || !data.price.inputValid
                    || (data.picture && true)
                }
                onClick={formOnSubmit}
            >
                Create
            </MyButton>
        </MyModal>
    );
});

export default AdminModal;