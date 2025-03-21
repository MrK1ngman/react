import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    currentItem: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      state.currentItem = action.payload;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      state.currentItem = null;
    },
    cancelEdit: (state) => {
      state.currentItem = null;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, editItem, updateItem, cancelEdit, deleteItem } = itemsSlice.actions;

export default itemsSlice