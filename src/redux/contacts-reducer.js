import {createSlice} from "@reduxjs/toolkit";

let contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateContact: (state, action) => {
            state.contacts = state.contacts.map(contact =>
                contact.id === action.payload.id ? {...action.payload} : contact
            )
        }
    }
})

export const {addContact, deleteContact, updateContact} = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;
export default contactsReducer;