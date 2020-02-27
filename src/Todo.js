import { Komponent , render} from 'kofujs'

class Todo extends Komponent {
  constructor(props) {
    super(props)

    const styles = {
      todo: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '100%'
      },
      button: {
        margin: '30px',
        fontSize: '18px',
        height: '65px',
        width: '100px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#779BBD'
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
        <button className={this.classes.button} onClick={this.handleRemove}>Delete</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
