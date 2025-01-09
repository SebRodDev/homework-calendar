import React from 'react';
import { useParams } from 'react-router-dom';
import "./Styles/HomeworkCalendarLooks.css";

export default function HomeworkCalendar() {
    const { userUsername } = useParams();
    return (
        <div class="homeworkBackground">
            <h1>Homework Calendar</h1>
            <h2 class="title">Welcome back {userUsername}!</h2>
            <div>
                <p>Two options of creating the homework calendar: 
                    1. Manually input all homework dates to create the homework calendar 
                    2. Upload a syllabus and allow a machine learning model to create the homework calendar</p>
            </div>
        </div>
    )
}
