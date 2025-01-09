import React from 'react';
import { useParams } from 'react-router-dom';
import "./Styles/HomeworkCalendarLooks.css";

export default function HomeworkCalendar() {
    const { userUsername } = useParams();
    return (
        <div class="homeworkBackground">
            <div>
                <p class="instructions">Two options of creating the homework calendar:
                    <br />
                    <br />1. Manually input all homework dates to create the homework calendar 
                    <br />2. Upload a syllabus and allow a machine learning model to create the homework calendar
                    </p>
            </div>
            <h1 class="platformName">Homework Calendar</h1>
            <h2 class="title">Welcome back {userUsername}!</h2>
        </div>
    )
}
