import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
// import Radium, { StyleRoot } from "radium";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    persons: [
      { id: "max-28", name: "Max", age: 28 },
      { id: "man-29", name: "Manu", age: 29 },
      { id: "ste-26", name: "Stephanie", age: 26 }
    ],
    username: "super Name",
    showPersons: true,
    userInput: ""
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

  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const inputText = [...this.state.userInput];
    inputText.splice(index, 1);

    const updatedText = inputText.join("");
    console.log(updatedText);
    this.setState({ userInput: updatedText });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
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
      style.backgroundColor = "red";
    //   style[":hover"] = {
    //     backgroundColor: "salmon",
    //     color: "black"
    //   };
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

    const charList = [...this.state.userInput].map((el, ix) => {
      return (
        <Char letter={el} key={ix} clicked={() => this.deleteCharHandler(ix)} />
      );
    });

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    classes = classes.join(" ");

    return (
    //   <StyleRoot>
        <div className="App">
          <h1> React test application </h1>
          <p className={classes}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
          <br />
          <h2>Assignment One</h2>
          <UserInput
            changed={this.userNameChangedHandler}
            currentName={this.state.username}
          />
          <UserOutput name="What" />
          <UserOutput name="Who" />
          <UserOutput name={this.state.username} />

          <h2>Assignment Two</h2>
          <input
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          <br />
          {charList}
        </div>
    //   </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
