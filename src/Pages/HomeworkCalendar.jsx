import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Styles/HomeworkCalendarLooks.css";
import AddWindow from "./AddingAssignmentWindow";

export default function HomeworkCalendar() {
    const { userUsername } = useParams();
    const [addWindow, showAddWindow] = useState(false);

    const openAddWindow = () => {
        showAddWindow(!addWindow);
    }

    return (
        <div class="homeworkBackground">
            <div class="instructionsContainer">
                <p class="instructions">Two options of creating the homework calendar:
                    <br />
                    <br />1. Manually input all homework dates to create the homework calendar 
                    <br />2. Upload a syllabus and allow a machine learning model to create the homework calendar
                    </p>
            </div>
            <h1 class="platformName">Homework Calendar</h1>
            <h2 class="title">Welcome back {userUsername}!</h2>
            <button type="button" class="homeworkCreation" onClick={openAddWindow}>Manual Input</button>
            {addWindow && <AddWindow />}
            <button type="button" class="homeworkCreation">Upload Syllabus</button>
        </div>
    )
}
