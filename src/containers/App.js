import React, { Component } from 'react';
import classes from './App.css';
// import styled from 'styled-components';
import Equipment from '../components/Equipment/Equipment';
import Users from '../components/Users/Users'
import Cockpit from '../components/Cockpit/Cockpit'
import Hook from '../components/HookFeature/Hook';
import PassingMethodReferencesFeature from '../components/PassingMethodReferencesFeature/PassingMethodReferencesFeature';
import TwoWayBindingFeature from '../TwoWayBindingFeature/TwoWayBindingFeature';

// styled-components
// const StyledButton = styled.button `
//       background-color: ${props => props.alt ? 'red' : 'purple' };
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//       &:hover {
//           background-color: ${props => props.alt ? 'grey' : 'magenta'};
//           color: 'black';
//       }
// `;

class App extends Component {
    // Lifecycle Hook 1
    //--------------------------------------------------------
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            equipment: [
                {id: 0, name: 'TD221', type: 'Cat D10'},
                {id: 1, name: 'TD222', type: 'Cat D10'},
                {id: 2, name: 'TD333', type: 'Cat D9'}
            ],
            showEquipment: false,
            passedMethodReferenceFeature: [
                {id: 0, name: 'Pizza', calories: 500},
                {id: 1, name: 'Cheeseburger', calories: 475}
            ],
            twoWayBindingFeature: [
                {id: 0, name: 'Mizi'},
                {id: 1, name: 'John'},
                {id: 2, name: 'Aiden'}
            ],
            users: [
                {id: 0, name: 'Jubei Kibagami', email: 'jubie.kibagami@gmail.com'},
                {id: 1, name: 'Ryu', email: 'ryu@gmail.com'},
                {id: 3, name: 'Clark Kent', email: 'superkent@gmail.com'}
            ]
        };
    }
    // The following setting of state is a modern approach.
    // When declared this way the constructor is automatically called
    // with the state assignment.
    // state = {
    //     equipment: [
    //         { id: 0, name: 'TD221', type: 'Cat D10' },
    //         { id: 1, name: 'TD222', type: 'Cat D10' },
    //         { id: 2, name: 'TD333', type: 'Cat D9' }
    //     ],
    //     showEquipment: false,
    //     passedMethodReferenceFeature: [
    //         { id: 0, name: 'Pizza', calories: 500 },
    //         { id: 1, name: 'Cheeseburger', calories: 475 }
    //     ],
    //     twoWayBindingFeature: [
    //         { id: 0, name: 'Mizi' },
    //         { id: 1, name: 'John' },
    //         { id: 2, name: 'Aiden' }
    //     ],
    //     users: [
    //         {id: 0, name: 'Jubei Kibagami', email: 'jubie.kibagami@gmail.com'},
    //         {id: 1, name: 'Ryu', email: 'ryu@gmail.com'},
    //         {id: 3, name: 'Clark Kent', email: 'superkent@gmail.com'}
    //     ]
    // };

    // Lifecycle Hook 2
    //--------------------------------------------------------
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // Lifecycle Hook 3
    // -------------------------------------------------------
    UNSAFE_componentWillMount() {
        console.log('[App.js] componentWillMount')
    }

    // Lifecycle Hook 4
    // -------------------------------------------------------
    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    changeEquipmentTypeHandler = () => {
        this.setState({
          equipment: [
              { name: 'TD221', type: 'Cat D10' },
              { name: 'TD222', type: 'Cat D11' },
              { name: 'TD333', type: 'Komatsu D155 ' }
          ]
        })
    };

    // This will allow the changing of one of the values. This will take one
    // argument that will allow a stateless component to receive a method as a prop.
    changePassedMethodReferenceValueHandler = (newFood) => {
        this.setState( {
            passedMethodReferenceFeature: [
                { id:0, name: newFood, calories: 500 },
                { id:1, name: 'Cheeseburger', calories: 475 }
            ]
        })
    };

    twoWayBindingNameChangeHandler = (event, id) => {
        // Here is how to find an element or item in an array or object.
        const personIndex = this.state.twoWayBindingFeature.findIndex(p => {
            return p.id === id;
        });

        // Create a copy of the array to merge back into the twoWayBindingFeature state.
        const person = {
            ...this.state.twoWayBindingFeature[personIndex]
        };

        // Change the name to the events value
        person.name = event.target.value;

        // Create a copy of the Updated twoWayBindingFeature state.
        const twoWayBindingFeature = [...this.state.twoWayBindingFeature];
        // Set the copy of the updated twoWayBindingFeature state to include the
        // updated user.
        twoWayBindingFeature[personIndex] = person;

        // Merge the copied state into the original twoWayBindingFeature
        this.setState({twoWayBindingFeature: twoWayBindingFeature});
    };

    toggleEquipmentHandler = () => {
        const doesShow = this.state.showEquipment;
        this.setState({showEquipment: !doesShow})
    };

    deleteEquipmentHandler = (equipmentIndex) => {
        // This is a copy of the equipment state by using the splice.
        //  const equipment = this.state.equipment.slice();

        // This is the ES6 way which makes use of the spread operator.
        // ALWAYS alter state in an IMMUTABLE FASHION!!!!

        const equipment = [...this.state.equipment];
        equipment.splice(equipmentIndex, 1);
        // Here we replace the original equipment state with the new
        // reference we removed the index from.
        this.setState({equipment: equipment});
    };

  // Lifecycle Hook 5
  //--------------------------------------------------------
  render() {
      console.log('[App.js] render');
  // Component specific style using Radium for psuedo-selector
  // const buttonStyle = {
  //     backgroundColor: 'white',
  //     font: 'inherit',
  //     border: '1px solid blue',
  //     padding: '8px',
  //     cursor: 'pointer',
  //     ':hover' :{
  //         backgroundColor: 'blue',
  //         color: 'black'
  //     }
  // };

    let equipment = null;
    if (this.state.showEquipment) {
        // Conditionally Render a Dynamic List.
        equipment = (
            <Equipment
                equipment={this.state.equipment}
                clicked={this.deleteEquipmentHandler}
                changed={this.twoWayBindingNameChangeHandler}/>
        );
    }

    return (
      <div className={classes.App}>
          <Cockpit
            showEquipment={this.state.showEquipment}
            equipment={this.state.equipment}
            clicked={this.toggleEquipmentHandler}
          />
          {equipment}
          <button onClick={this.changeEquipmentTypeHandler}>Change Type</button>
          {this.state.twoWayBindingFeature.map((person, index) => {
              return (
                <TwoWayBindingFeature
                  name={person.name}
                  changed={(event) => this.twoWayBindingNameChangeHandler(event, person.id)}
                  key={person.id}
                />
              )
          })}
          <Hook/>
          {this.state.passedMethodReferenceFeature.map((food, index) => {
              return (
              <PassingMethodReferencesFeature
                name={food.name}
                calories={food.calories}
                click={this.changePassedMethodReferenceValueHandler.bind(this, 'Lasagna')}
                key={food.id}
              />
          )
          })}

          <button onClick={this.changePassedMethodReferenceValueHandler.bind(this, 'Spaghetti')}>Change Food</button>
          <Users users={this.state.users}/>
      </div>
        // Is the same as:
       // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hexagon MC Pro'))
    );
  }
}

export default App;
