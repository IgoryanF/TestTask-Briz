import React from 'react';
import Field from "./Field";
import styles from "./contactForm.module.scss";
import stylesPhone from './contactField.module.scss'
import FormRules from "./FormRules";
import InputMask from 'react-input-mask';


const ContactForm = ({initialValues, onSubmit, buttonText}) => {

    const validate = (values) => {
        let error = {};
        if (!values.fullName) {
            error.fullName = "Не должно быть пустым"
        }
        if (!values.phoneNumber) {
            error.phoneNumber = "Не должно быть пустым"
        } else if (!/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(values.phoneNumber)) {
            error.phoneNumber = "Некорректный номер"
        }
        return error
    }

    return (

        <div className={styles.formContainer}>
            <FormRules
                initialValues={{...initialValues}}
                validate={validate}
                onSubmit={onSubmit}
            >
                {(props) => {

                    return (
                        <form className={styles.form} onSubmit={props.handleSubmit}>
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="Введите фамилию контакта"
                                value={props.values.fullName}
                                handleChange={props.handleChange}
                                handleBlur={props.handleBlur}
                            >
                            {props.errors.fullName && props.touched.fullName &&
                            <Error>{props.errors.fullName}</Error>
                            }
                            </Field>

                            <InputMask
                                name="phoneNumber"
                                type="tel"
                                mask={"+380 (99) 999 99 99"}
                                placeholder="Введите номер телефона"
                                value={props.values.phoneNumber}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            >
                                {(inputProps) => (
                                    <StyledPhoneField {...inputProps}>
                                        {props.touched.phoneNumber && props.errors.phoneNumber &&
                                        <Error>{props.errors.phoneNumber}</Error>}
                                    </StyledPhoneField>
                                )}
                            </InputMask>

                            <button
                                className={styles.formButton}
                                disabled={props.isSubmitting}
                            >
                                {buttonText}
                            </button>
                        </form>
                    )
                }}
            </FormRules>

        </div>
    );
};


const Error = ({children}) => {
    return (
        <span className={styles.errorMessage}>
            {children}
        </span>
    )
}

const StyledPhoneField = ({children, ...inputProps}) => {
    return (
        <div className={stylesPhone.inputWrapper}>
            <input
                className={stylesPhone.inputField}
                {...inputProps}
            />
            {children}
        </div>
    )
}

export default ContactForm;