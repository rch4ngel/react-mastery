import React from 'react'

const style = {
    width: '60%',
    height: '250px',
    margin: '30px auto',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    boxSizing: 'border-box',
    padding: '16px',
    textAlign: 'center'
};

const twoWayBindingFeature = props => {
    return (
        <div style={style}>
            <h1>{ props.id }</h1>
            <h2>{ props.name }</h2>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default twoWayBindingFeature