import React from 'react';
import Form from 'react-bootstrap/Form'

const ColorPicker = ({onChange, value, id}) => {
    return (
        <>
            <Form.Label htmlFor={id}>Color</Form.Label>
            <Form.Control
                type="color"
                id={id}
                title="Choose your color"
                onChange={onChange}
                value={value}
                size="lg"
                style={{width: '100%'}}
            />
        </>
    );
};

export default ColorPicker;