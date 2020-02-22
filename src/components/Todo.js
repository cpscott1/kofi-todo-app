import { Komponent, render } from 'kofujs'

class Todo extends Komponent {
  present (props) {
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        {console.log(this.props)}
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
