import React from "react";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "./Log.css";

function Log() {
    return(
        <>
        {/* Log/Display Workouts */}
            <h3 className="brainstorm-text">This will be the log page where users can come, log their workouts, and track their progress</h3>
            {/* <Calendar/> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
        </>
    )
}

export default Log