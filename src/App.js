import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    username: "super Name"
  };

  switchNameHandler = () => {
    // console.log("It was clicked!");
    let localPersons = {
        persons: [
            { name: "Momotaro", age: 67 },
            { name: "Nuria", age: 29 },
            { name: "Luka", age: 26 }
        ],
        username: "super Name"
    };
    this.setState(localPersons);
  };

  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              { name: 'Max', age: 23 },
              { name: event.target.value, age: 24 },
              { name: 'Stephanie', age: 25 }
          ],
          username: "super Name"
      }

      );
  }

  userNameChangedHandler = (event) => {
      this.setState( {username: event.target.value } );
  }

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1x solid blue',
          padding: '8px'
      };
    return (
      <div className="App">
        <h1> React test application </h1>
        <button 
            style={style}
            onClick={() => this.switchNameHandler}> Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Maxxx!')}
            change={this.nameChangedHandler}>
                My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        <UserInput changed={this.userNameChangedHandler} />
        <UserOutput name="What" />
        <UserOutput name="Who" />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
