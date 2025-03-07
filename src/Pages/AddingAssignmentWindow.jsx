import React from 'react';
import { useState } from 'react';
import './Styles/AddingAssignmentWindowLooks.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AddingAssignmentWindow() {
    const [dueDate, setDueDate] = useState("");
    const [assignmentName, setAssignmentName] = useState("");
    const [className, setClassName] = useState("");
    const { userId } = useParams();
    const [showScreen, setShowScreen] = useState(true);

    if (!showScreen) {
        return null;
    }

    async function addAssignment() {
        if (!dueDate || !assignmentName || !className) {
            alert("Error! Please make sure that all fields are filled out correctly");
            return;
        }

            try {
                const response = await axios.post(`http://localhost:8080/api/users/assignments/${userId}`, { userId, dueDate, assignmentName, className });
                alert("Assignment created successfully!");
            } catch (error) {
                alert("Error creating an assignment, please try again!");
            }
    }

    return (
        <div class="blurredBackground">
        <div class="windowBackground">
            <h3 class="instructionText">Please fill out all of the information below: </h3>
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
            <button type="button" class="createAssignmentButton" onClick={() => {addAssignment(); setShowScreen(false);}}>Create Assignment</button>
        </div>
    </div>
    )
}
