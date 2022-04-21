import React, {Component} from "react";
import Table from "./Table";

// ? Class Component
// ? class App extends Component {
// ?   render() {
// ?     const characters = [
// ?       {
// ?         name: 'Charlie',
// ?         job: 'Janitor',
// ?       },
// ?       {
// ?         name: 'Mac',
// ?         job: 'Bouncer',
// ?       },
// ?       {
// ?         name: 'Dee',
// ?         job: 'Aspring actress',
// ?       },
// ?       {
// ?         name: 'Dennis',
// ?         job: 'Bartender',
// ?       },
// ?     ]

// ?     return (
// ?        <div className="container">
//?              <Table characterData={characters}/>
//?         </div> 
// ?     )
// ?   }
// ? }

class App extends Component {
  // ?The state is the set of data that is managed by the component.
  state = {
    characters: [
       {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  
  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
    }

    render() {
      const {characters} = this.state

      return (
        <div>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
      )
    }

}

export default App