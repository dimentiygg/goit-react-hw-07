import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const selectContacts = (state) => state.contacts.items;

const slice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;
