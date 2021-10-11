import styles from './App.module.scss';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import {addContact} from "./redux/contacts-reducer";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1 className={styles.title}>Форма для добавления контактов</h1>
                <ContactForm
                    buttonText="Добавить контакт"
                    initialValues={{
                    fullName: '',
                    phoneNumber: ''
                }}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true)
                        dispatch(addContact({id: new Date().getTime(), ...values}))
                        setSubmitting(false)
                    }}
                />
                <h1 className={styles.title + " " + styles.bottom}>Список Ваших контактов</h1>
                <ContactList/>
            </div>
        </div>
    );
}

export default App;
