import { Komponent , render} from 'kofujs'

class Todo extends Komponent {
  present() {
    return (
      <div>
        <button>Edit</button>
        <button>Delete</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
