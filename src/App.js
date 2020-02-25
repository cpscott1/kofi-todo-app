import { Komponent , render, fu} from 'kofujs'
import Todo from './Todo'
import TodoForm from './TodoForm'

class App extends Komponent {
  constructor(props){
    super(props);
    this.state = {
      todos: [{ task: "Grab Groceries" }, { task: "Take out the trash" }]
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.addHandler = this.addHandler.bind(this)
  }

  inputHandler(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addHandler(props) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

    present () {
      console.log('rendering')
      const todos = this.state.todos
      {console.log(todos.task)}

      return (
        <div>
          <h1>Todo App</h1>
          <TodoForm newTodo={this.addHandler}/>
          <ul>
            {fu.mapElements( todos, (item, i) => <li><Todo task={item.task} /></li>)}
          </ul>
        </div>
      )
    }
}

export default App;
