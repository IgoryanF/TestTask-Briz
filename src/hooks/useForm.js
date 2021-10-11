import {useMemo, useState} from "react";

const generateProps = (initialValues, value) => {
    let objWithProps = {};
    Object.keys(initialValues).forEach(key => {
        objWithProps = {...objWithProps, [key]: value}
    })
    return objWithProps;
}

export const useForm = ({initialValues, onSubmit, validate}) => {

    const [values, setValues] = useState({...initialValues});

    const [touched, setTouched] = useState(() => {
        return generateProps(initialValues, false);
    })

    const [errors, setErrors] = useState(() => {
        return generateProps(initialValues, undefined);
    })

    const initialErrors = useMemo(() => {
        return generateProps(initialValues, undefined);
    }, [initialValues]);

    const initialTouched = useMemo(() => {
        return generateProps(initialValues, false);
    }, [initialValues]);

    let isValid = true;

    const [isSubmitting, setSubmitting] = useState(false);


    const validation = () => {
        const err = validate(values);

        if (Object.keys(err).length !== 0) {
            setErrors({...initialErrors, ...err});
            isValid = false
        } else {
            setErrors({...initialErrors});
            isValid = true;
        }
    }

    const handleChange = (event) => {
        setValues(prevState => ({
            ...prevState, [event.target.name]: event.target.value
        }))
    }

    const handleBlur = (event) => {
        setTouched(prevState => ({
            ...prevState, [event.target.name]: true
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validation()
        if (!isValid) {
            setTouched(Object.fromEntries(
                Object.entries(touched).map(([key, _]) => [key, true])
            ))
            return false
        } else {
            setValues({...initialValues});
            setErrors({...initialErrors});
            setTouched({...initialTouched});
            onSubmit(values, {setSubmitting});
        }
    }

    return {values, touched, errors, isSubmitting, handleSubmit, handleChange, handleBlur, validation}
}