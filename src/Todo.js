import { Komponent , render} from 'kofujs'

class Todo extends Komponent {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove() {
    this.props.deleteTodo(this.props.id)
  }
  present() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
