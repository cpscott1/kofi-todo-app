import { Komponent , render, fu} from 'kofujs'

class TodoForm extends Komponent {
  constructor(props){
    super(props)
    this.state = { task: ''}

    const styles = {
      newTodoForm: {
        marginTop: '3rem',
        display: 'flex',
        flexWrap: 'wrap'
      },
      newTodoInput: {
        flexGrow: '1',
        border: 'none',
        backgroundColor: '#f7f1f1',
        padding: '0 1.5em',
        fontSize: 'initial',
        outline: 'none'
      },
      newTodoButton: {
        padding: '0 1.3rem',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        marginLeft: '5px',
        cursor: 'pointer',
        transition: 'background 0.4 ease-out',
        outline: 'none'
      }
    }

    const { classes } = this.setStyles(styles)
    this.classes = classes

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
    <form className={this.classes.newTodoForm} onSubmit={this.submitHandler}>
      <input className={this.classes.newTodoInput}
      placeholder="new task"
      value={this.state.task}
      id='task'
      name="task"
      onChange={this.inputHandler}/>
      <button className={this.classes.newTodoButton}>Add Todo</button>
    </form>
    )
  }
}

export default TodoForm;
