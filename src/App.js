import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = state =>{
  return { items: state.items }
}

const mapDispatchToPorps = dispatch =>{
  return { dispatch }
}
export default connect(mapStateToProps, mapDispatchToPorps)(App);
