/* eslint-disable */
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  updateTodo = (index, updatedTodo) => {
    const newTodos = this.state.todos.map((todo, i) =>
      i === index ? updatedTodo : todo
    );
    this.setState({ todos: newTodos });
  };

  deleteTodo = (index) => {
    const newTodos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="container">
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
