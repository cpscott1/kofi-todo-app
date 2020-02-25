import { Komponent , render, fu} from 'kofujs'

class TodoItems extends Komponent {
  constructor(props){
    super(props)
  }
  present(props) {
    const todos = this.props.todos
    console.log(todos)
    const listItems = fu.mapElements( todos, (item, i) => {
      return <div className="list">
        <p>{item.text}</p>
      </div>
    })
    return(
      <h1>{listItems}</h1>
    )
  }
}

export default TodoItems;
