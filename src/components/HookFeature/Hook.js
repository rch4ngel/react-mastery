import React, { useState } from 'react'

// This file will describe the use of state in functional components.
// To make use of state in functional components the use of react hooks is required.
// Below is an example on how to implement react hooks with the 'useState' keyword.
// NOTE: When working with functional components make sure to use lowercase name.

// As a best practice, make sure to have the least amount of stateful components possible.

const hook = props => {
    const [hookState, setHookState] = useState({
        hooks: [
            { name: 'Jubei Kibagami', power: 'Sword of benevolence'},
            { name: 'Ryu', power: 'Hadoukin'}
        ]
    });

    console.log(hookState);

    const switchHookStateHandler = () => {
        setHookState({
            hooks: [
                { name: 'Solid Snake', power: 'Ghost of will' },
                { name: 'Ryu', power: 'Hadouken' }
            ]
        })
    };

    return (
        <div>
            <h1>{hookState.hooks[0].name}</h1>
            <h2>{hookState.hooks[0].power}</h2>
            <button onClick={switchHookStateHandler}>Switch Hook State</button>
        </div>
    )
};

export default hook;