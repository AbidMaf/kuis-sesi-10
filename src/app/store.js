import { configureStore } from '@reduxjs/toolkit'
import ReminderReducer from '../features/ReminderSlice'

export const store = configureStore({
    reducer: {
        reminders: ReminderReducer,
    }
})