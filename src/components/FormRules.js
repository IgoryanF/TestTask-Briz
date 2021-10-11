import React, {useEffect} from 'react';
import {useForm} from "../hooks/useForm";

const FormRules = ({children, ...props}) => {

    const formRules = useForm({...props});

    useEffect(() => {
        formRules.validation();
    }, [formRules.values])

    return (
        <>
            {typeof children === 'function'
                ? children(formRules) : children
            }
        </>

    );
};

export default FormRules;