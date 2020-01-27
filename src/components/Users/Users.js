import React from 'react'
import User from './User/User'

const users = props => {
    console.log('[User.js] rendering...');
    return props.users.map((user, index) => {
        return (
            <User
                click={() => props.clicked(index)}
                name={user.name}
                email={user.email}
            />
        )
    });
};

export default users;