import { Komponent , render} from 'kofujs'

class Todo extends Komponent {
  constructor(props) {
    super(props)

    const styles = {
      todo: {
        display: 'flex',
        margin: '0 6rem',
        padding: '1.1rem 3rem',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }
    }

    const { classes } = this.setStyles(styles)
    this.classes = classes

    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove() {
    this.props.deleteTodo(this.props.id)
  }
  present() {
    return (
      <div className={this.classes.todo}>
        <button onClick={this.handleRemove}>Delete</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
