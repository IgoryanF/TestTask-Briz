import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteContact} from "../redux/contacts-reducer";
import EditModal from "./EditModal";
import styles from "./contactItem.module.scss"

const ContactItem = ({contact}) => {

    const [isEditMode, setEditMode] = useState(false)

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteContact(contact.id));
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    return (
        <>
            <div className={styles.item}>
                <div className={styles.info}>
                    <div className={styles.content}>
                        <h2 className={styles.subTitle}>Фамилия</h2>
                        <span className={styles.fullName}>{contact.fullName}</span>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.subTitle}>Номер мобильного</h2>
                        <span className={styles.phoneNumber}>{contact.phoneNumber}</span>
                    </div>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.button + " " + styles.edit} onClick={handleEdit}>
                        Отредактировать
                    </button>
                    <button className={styles.button + " " + styles.delete} onClick={handleClick}>
                        Удалить контакт
                    </button>
                </div>
            </div>
            {isEditMode &&
            <EditModal
                setEditMode={setEditMode}
                phoneNumber={contact.phoneNumber}
                fullName={contact.fullName}
                id={contact.id}
            />
            }
        </>
    );
};

export default ContactItem;