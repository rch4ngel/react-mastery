import React from 'react'
// In case we wanted to use the radium package for using pseudo-selectors.
// -----------------------------------------------------------------------
// import Radium from 'radium'
// If we are going to use a global CSS file. import './Equipment.css'
// import './Equipment.css'

// Use styled components for inline styling.
import styled from 'styled-components'

// Making use of the props keyword. This allows the passing of values through the HTML attributes.
// e.g. <Equipment name='TD221' type='Cat D10'/>

// We can also extract the text within a component, e.g.
//  <Equipment name='TD221' type='Cat D10'>The first created Dozer</Equipment>
//  The `The first created Dozer` can be extracted by using props.children. Shown below.
const equipment = (props) => {
    // Inline CSS for component specific styles.
    // Making use of Radium for a media query
    const StyledDiv = styled.div`
        width: 60%;
        height: 250px;
        margin: 30px auto;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        box-sizing: border-box;
        padding: 16px;
        text-align: center;
        
        @media (min-width: 500px) {
            width: 450px;
        }
    `;

    return (
        <StyledDiv onClick={props.click}>
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <p>{props.children}</p>
        </StyledDiv>
    )
};

export default equipment;