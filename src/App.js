import { Komponent , render, fu} from 'kofujs'
import Todo from './Todo'

class App extends Komponent {
  constructor(props){
    super(props);
    this.state = {
      todos: [{ task: "Grab Groceries" }, { task: "Take out the trash" }]
    }
  }

    present () {
      console.log('rendering')
      const todos = this.state.todos
      {console.log(todos.task)}

      return (
        <div>
          <h1>Todo App</h1>
          <ul>
            {fu.mapElements( todos, (item, i) => <li><Todo task={item.task} /></li>)}
          </ul>
        </div>
      )
    }
}

export default App;
