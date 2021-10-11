import React from 'react';
import {useSelector} from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {

    const {contacts} = useSelector(state => state.contactsReducer);

    return (
        <div>
            {contacts.length === 0 &&
                <h2>Список контактов пуст</h2>
            }
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact}/>
            ))}
        </div>
    );
};

export default ContactList;