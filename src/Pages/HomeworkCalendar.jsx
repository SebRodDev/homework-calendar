import React from 'react';
import { useParams } from 'react-router-dom';
import "./Styles/HomeworkCalendarLooks.css";

export default function HomeworkCalendar() {
    const { userUsername } = useParams();
    return (
        <div>
            <h1 class="title">Welcome back {userUsername}!</h1>
        </div>
    )
}
