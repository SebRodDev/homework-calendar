import React from 'react';
import { useState } from 'react';
import './Styles/AddingAssignmentWindowLooks.css';

export default function AddingAssignmentWindow() {
    const [dueDate, setDueDate] = useState("");
    const [assignmentName, setAssignmentName] = useState("");
    const [className, setClassName] = useState("");

    return (
        <div class="windowBackground">
            <h3>Please fill out all of the information below: </h3>
            <input
            type="text"
            placeholder="Assignment Name"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}>
            </input>
            <input
            type="text"
            placeholder="Course Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}>
            </input>
            <input
            type="text"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}>
            </input>
        </div>
    )
}
