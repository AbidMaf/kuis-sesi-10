import { createSlice } from '@reduxjs/toolkit';

export const ReminderSlice = createSlice({
    name: 'reminder',
    initialState: {
        reminders: [],
        value: ''
    },
    reducers: {
        addReminder: (state, action) => {
            state.reminders = [...state.reminders, action.payload]
        },
        updateReminder: (state, action) => {
            state.reminders = [...action.payload]
        },
        setValueReminder: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { addReminder, updateReminder, setValueReminder } = ReminderSlice.actions

export default ReminderSlice.reducer