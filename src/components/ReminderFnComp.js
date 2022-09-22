import { useSelector, useDispatch } from 'react-redux'
import {
    addReminder,
    updateReminder,
    setValueReminder
} from '../features/ReminderSlice'
import { useState } from 'react'

const AddReminder = () => {
    const valueReminder = useSelector(state => state.reminders.value)
    const dispatch = useDispatch()
    const currentDate = new Date()

    return (
        <button onClick={() => dispatch(addReminder({reminder: valueReminder, date: (new Date()).toString(), id: Date.now() + Math.random(20)}))}>Add Reminder</button>
    )
}

const InputReminder = () => {
    const valueReminder = useSelector(state => state.reminders.value)
    const dispatch = useDispatch();
    return (
        <>
            <input type="text" value={valueReminder} onChange={(e) => dispatch(setValueReminder(e.target.value))} />
        </>
    )
}

// const EditReminder = ({value}) => {
//     const dispatch = useDispatch()
//     return (
//         <>
//             <input type="text" value={value} onChange={(e) => dispatch(setValueReminder(e.target.value))} />
//         </>
//     )
// }

const UpdateReminder = ({value, id}) => {
    const reminders = useSelector(state => state.reminders.reminders);
    const dispatch = useDispatch();
    const handleUpdate = () => {
        let tempReminder = reminders.filter((reminder) => reminder.id == id).map((reminder) => reminder.value == value)
        dispatch(updateReminder(tempReminder))
    }
    return(
        <button onClick={() => handleUpdate(value, id)}>Update</button>
    )
}

const DeleteReminder = ({id}) => {
    const reminders = useSelector(state => state.reminders.reminders);
    const dispatch = useDispatch();
    const handleDelete = () => {
        let tempReminder = reminders.filter((reminder) => reminder.id !== id)
        dispatch(updateReminder(tempReminder))
    }
    return(
        <button onClick={() => handleDelete(id)}>Delete Reminder</button>
    )
}

const ReminderFnComp = () => {
    const reminders = useSelector(state => state.reminders.reminders)
    // console.log(state.reminders)

    return(
        <div>
            <InputReminder />
            <AddReminder />
            <ul>
                {reminders.map((reminder) => (
                    <li key={reminder?.id}>
                    {/* <EditReminder value={reminder.reminder} /> */}
                    {reminder.reminder}
                    {reminder.date}
                    {/* <UpdateReminder value={reminder.reminder} id={reminder.id}/> */}
                    <DeleteReminder id={reminder.id} /></li>
                ))}
            </ul>
        </div>
    )
}

export default ReminderFnComp;