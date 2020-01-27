import React from 'react'
// In case we wanted to use the radium package for using pseudo-selectors.
// -----------------------------------------------------------------------
// import Radium from 'radium'
// If we are going to use a global CSS file. import './EquipmentItem.css'
import classes from './EquipmentItem.css'

// Use styled components for inline styling.
//import styled from 'styled-components'

// Making use of the props keyword. This allows the passing of values through the HTML attributes.
// e.g. <Equipment name='TD221' type='Cat D10'/>

// We can also extract the text within a component, e.g.
//  <Equipment name='TD221' type='Cat D10'>The first created Dozer</Equipment>
//  The `The first created Dozer` can be extracted by using props.children. Shown below.
const equipmentItem = (props) => {

    // Inline CSS for component specific styles.
    // Making use of Radium for a media query
    // const StyledDiv = styled.div`
    //
    // `;

    return (
        <div className={classes.EquipmentItem} onClick={props.click}>
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <p>{props.children}</p>
        </div>
    )
};

export default equipmentItem