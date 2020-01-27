import React from 'react';

// This component shows the use of passing methods through properties.
// Define the on click attribute and pass it the desired method.
// The method is defined in the App.js file.

const passingMethodReferencesFeature = props => {
    console.log(props);
    return (
        <div className={props.className}>
            <h1 onClick={props.click}>{ props.name }</h1>
            <h2>{ props.calories }</h2>
        </div>
    )
};

export default passingMethodReferencesFeature;