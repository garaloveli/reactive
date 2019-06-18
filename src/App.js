import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { id: "max-28", name: "Max", age: 28 },
      { id: "man-29",name: "Manu", age: 29 },
      { id: "ste-26",name: "Stephanie", age: 26 }
    ],
    username: "super Name",
    showPersons: true
  };

  //   switchNameHandler = () => {
  //     // console.log("It was clicked!");
  //     let localPersons = {
  //       persons: [
  //         { name: "Momotaro", age: 67 },
  //         { name: "Nuria", age: 29 },
  //         { name: "Luka", age: 26 }
  //       ]
  //     };
  //     this.setState(localPersons);
  //   };

  deletePersonHandler = index => {
    const persons = [...this.state.persons]; //this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(el => {
      return el.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    //   const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const oldState = this.state.showPersons;
    this.setState({ showPersons: !oldState });
  };

  userNameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    // <Person
    //         name={this.state.persons[0].name}
    //         age={this.state.persons[0].age}
    //       />
    //       <Person
    //         name={this.state.persons[1].name}
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, "Maxxx!")}
    //         change={this.nameChangedHandler}
    //       >
    //         My Hobbies: Racing
    //       </Person>
    //       <Person
    //         name={this.state.persons[2].name}
    //         age={this.state.persons[2].age}
    //       />{" "}

    return (
      <div className="App">
        <h1> React test application </h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show me!
        </button>
        {persons}
        <br />
        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput name="What" />
        <UserOutput name="Who" />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
