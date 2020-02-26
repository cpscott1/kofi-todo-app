import { Komponent , render} from 'kofujs'

class Todo extends Komponent {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }
  handleRemove() {
    this.props.deleteTodo(this.props.id)
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  updateHandler(event) {

  }
  present() {
    let result;
    if(this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.updateHandler}>
            <input type="text" />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
          <li>{this.props.task}</li>
        </div>
      )
    }
    return result;
  }
}

export default Todo;
