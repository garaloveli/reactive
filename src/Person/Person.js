import React from 'react';
// import Radium from 'radium';

import PerClasses from './Person.css';

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="Person" style={style}>
        <div className={PerClasses.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default person;
// export default Radium(person);