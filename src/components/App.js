import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }


  changeFilter = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onChangeFilter={this.changeFilter}
      />
    )
  }
}

export default App;


// import React, { Component } from 'react';
//
// import FruitBasket from './FruitBasket';
//
// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       currentFilter: null,
//       filters: [],
//       fruit: []
//     };
//   }
//
//   componentDidMount() {
//     this.fetchFilters();
//     this.fetchFruit();
//   }
//
//   fetchFilters = () => {
//     fetch('/api/fruit_types')
//       .then(response => response.json())
//       .then(filters => this.setState({ filters }));
//   }
//
//   fetchFruit = () => {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(fruit => this.setState({ fruit }));
//   }
//
//   updateFilter = event => {
//     console.log('update filter to: ', event.target.value);
//     this.setState({ currentFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <FruitBasket
//         fruit={this.state.fruit}
//         filters={this.state.filters}
//         currentFilter={this.state.currentFilter}
//         onUpdateFilter={this.updateFilter}
//       />
//     );
//   }
// }
//
// export default App;
