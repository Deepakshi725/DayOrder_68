/* eslint-disable */

import React, { Component } from 'react';

class TodoItem extends Component {
  handleEditChange = (e) => {
    const updatedText = e.target.value;
    this.props.updateTodo(this.props.index, {
      text: updatedText,
      completed: this.props.todo.completed
    });
  };

  render() {
    const { todo, deleteTodo, index } = this.props;
    return (
      <li>
        <input
          type="text"
          value={todo.text}
          onChange={this.handleEditChange}
        />
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
