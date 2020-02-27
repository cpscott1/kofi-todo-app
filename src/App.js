import { Komponent , render, fu} from 'kofujs'
import Todo from './Todo'
import TodoForm from './TodoForm'


class App extends Komponent {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }

    const styles = {
      todoList: {
        margin: '4rem auto',
        padding: '3rem 3rem 3rem',
        maxWidth: '500px',
        backgroundColor: '#ff6666',
        color: '#fff'
      },
      listItem: {
        marginTop: '2.6rem',
        padding: '0px',
        listStyle: 'none'
      }
    }

    const { classes } = this.setStyles(styles)
    this.classes = classes

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
        <div className={this.classes.todoList}>
          <h1>Todo App</h1>
          <ul className={this.classes.listItem}>
            {fu.mapElements( todos, (item, i) => <li><Todo key={i} id={i} task={item.task} deleteTodo={this.removeTodo} update={this.updateTodo}/></li>)}
          </ul>
          <TodoForm createTodo={this.addHandler}/>
        </div>
      )
    }
}

export default App;
