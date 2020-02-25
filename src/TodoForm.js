import { Komponent , render, fu} from 'kofujs'

class TodoForm extends Komponent {
  constructor(props){
    super(props)
    this.state = { task: ''}

    this.submitHandler = this.submitHandler.bind(this)
  }



  submitHandler(event) {
    event.preventDefault()
    this.props.newTodo(this.state)
    this.setState({
      task: ''
    })
  }

  present(props) {
    return (
    <form onSubmit={this.submitHandler}>
      <input
      placeholder="new task"
      value={this.state.task}
      name="todo"
      onChange={this.props.inputHandler}/>
      <button>Add Todo</button>
    </form>
    )
  }
}

export default TodoForm;
