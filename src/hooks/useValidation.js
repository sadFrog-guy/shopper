import {useEffect, useState} from "react";

const UseValidation = (value, validators) => {
    const [isEmpty, setEmpty] = useState(true)
    const [maxNumberError, setMaxNumberError] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validator in validators) {
            switch (validator) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'minLengthError':
                    value.length < validators[validator]
                        ? setMinLengthError(true)
                        : setMinLengthError(false)
                    break;
                case 'maxLengthError':
                    value.length > validators[validator]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false)
                    break;
                case 'maxNumberError':
                    value > validators[validator]
                        ? setMaxNumberError(true)
                        : setMaxNumberError(false)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if(isEmpty || minLengthError || maxLengthError || maxNumberError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxNumberError, maxLengthError])

    return {
        isEmpty,
        maxLengthError,
        minLengthError,
        maxNumberError,
        inputValid
    }
};

export default UseValidation;