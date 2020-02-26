import { Komponent , render, fu} from 'kofujs'

class TodoForm extends Komponent {
  constructor(props){
    super(props)
    this.state = { task: ''}

    this.inputHandler = this.inputHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  inputHandler(event) {
    this.setState({ [event.target.name]: event.target.value })
  }


  submitHandler(event) {
    event.preventDefault()
    this.props.createTodo({...this.state, id: '' })
    this.setState({
      task: ''
    })
  }

  present(props) {
    return (
    <form onSubmit={this.submitHandler}>
      <label htmlFor='task'>New Task</label>
      <input
      placeholder="new task"
      value={this.state.task}
      id='task'
      name="task"
      onChange={this.inputHandler}/>
      <button>Add Todo</button>
    </form>
    )
  }
}

export default TodoForm;
