import React from 'react';

const validation = (props) =>{
    return (
        <div>
        { props.inputLength <=5 ?
            <p>Text is too short</p>:
            <p>Text is ok</p>
        }
        </div>
    );
}

export default validation;