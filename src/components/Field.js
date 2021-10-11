import React from 'react';
import styles from './contactField.module.scss'

const Field = ({handleChange, handleBlur, children, ...props}) => {

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.inputField}
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {children}
        </div>
    );
};

export default Field;