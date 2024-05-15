/* eslint-disable */
import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      pronote: ''
    };
  }

  handleChange = (e) => {
    this.setState({ 
      newTodo: e.target.value,
      pronote: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo.trim()) {
      this.props.addTodo({
        text: this.state.newTodo,
        completed: false
      });
      this.setState({ 
        newTodo: '',
        pronote: ''
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Add this div to wrap the input and button */}
        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="Add a new to-do"
          />
          <button type="submit">Add Todo</button>
        </div>
        {/* Add this div for the pronote */}
        <div className="pronote">{this.state.pronote}</div>
      </form>
    );
  }
}

export default TodoForm;
