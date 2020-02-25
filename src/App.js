import { Komponent , render, fu} from 'kofujs'
import Todo from './Todo'
import TodoForm from './TodoForm'

class App extends Komponent {
  constructor(props){
    super(props);
    this.state = {
      todos: [{ task: "Grab Groceries" }, { task: "Take out the trash" }]
    }

    this.addHandler = this.addHandler.bind(this)
  }


  addHandler(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
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
            {fu.mapElements( todos, (item, i) => <li><Todo task={item.task} /></li>)}
          </ul>
        </div>
      )
    }
}

export default App;
