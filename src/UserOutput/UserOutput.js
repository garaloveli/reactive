import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p> My Name is:</p>
            <p> {props.name} </p>
        </div>
    );
};

export default userOutput;