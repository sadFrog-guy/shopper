import React from 'react';
import MyLabel from "../MyLabel/MyLabel";

const FileUpload = ({children, onChange}) => {
    return (
        <MyLabel>
            {children}
            <input
                type="file"
                name="picture"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onChange}
            />
        </MyLabel>
    );
};

export default FileUpload;