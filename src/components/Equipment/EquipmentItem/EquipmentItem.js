import React, { Component } from 'react'
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
class EquipmentItem extends Component {
    render () {
        return (
                <div className={classes.EquipmentItem} onClick={this.props.click}>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.type}</h2>
                    <p>{this.props.children}</p>
                </div>
            )
    }
};

export default EquipmentItem