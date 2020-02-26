import { Komponent , render, fu} from 'kofujs'
import Todo from './Todo'
import TodoForm from './TodoForm'

class App extends Komponent {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }

    this.addHandler = this.addHandler.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }


  addHandler(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodo(id) {
    const filteredTodos = this.state.todos.filter((item, i) => i !== id)
    this.setState({
      todos: filteredTodos
    })
  }

    present () {
      console.log('rendering')
      const todos = this.state.todos

      return (
        <div>
          <h1>Todo App</h1>
          <TodoForm createTodo={this.addHandler}/>
          <ul>
            {fu.mapElements( todos, (item, i) => <li><Todo key={i} id={i} task={item.task} deleteTodo={this.removeTodo} /></li>)}
          </ul>
        </div>
      )
    }
}

export default App;
