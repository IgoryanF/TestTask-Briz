import React from 'react';
import styles from './editModal.module.scss'
import ContactForm from "./ContactForm";
import {useDispatch} from "react-redux";
import {updateContact} from "../redux/contacts-reducer";

const EditModal = ({fullName, phoneNumber, id, setEditMode}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.modal} onClick={() => setEditMode(false)}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h1 className={styles.title}>Форма для редактирования</h1>
                <ContactForm
                    buttonText="Сохранить"
                    initialValues={{fullName, phoneNumber}}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true)
                        dispatch(updateContact({id, ...values}))
                        setSubmitting(true)
                        setEditMode(false)
                    }}
                />
                <span className={styles.close} onClick={() => setEditMode(false)}>
                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14.1426" y="11.3135" width="36" height="4" transform="rotate(45 14.1426 11.3135)" fill="#C4C4C4"/>
<rect x="39.5981" y="14.1421" width="36" height="4" transform="rotate(135 39.5981 14.1421)" fill="#C4C4C4"/>
</svg>
                </span>
            </div>
        </div>
    );
};

export default EditModal;