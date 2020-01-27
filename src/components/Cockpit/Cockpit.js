import React from 'react'
import classes from "./Cockpit.css";

const cockpit = (props) => {
    // Setting class names dynamically for styling
    const assignedClasses = [];
    let btnClass = '';

    if (props.showEquipment) {
        btnClass = classes.red;
    }

    if (props.equipment.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.equipment.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>React Mastery</h1>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Equipment
            </button>
        </div>
    );
};

export default cockpit;