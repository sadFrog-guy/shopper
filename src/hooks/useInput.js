import {useState} from "react";
import useValidation from "./useValidation";

const UseInput = (initialValue, validators) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validators)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        isDirty,
        ...valid,
        onChange,
        onBlur
    }
};

export default UseInput;