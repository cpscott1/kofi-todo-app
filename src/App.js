import { Komponent , render} from 'kofujs'

class App extends Komponent {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      currentItem: {
        text: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value
      }
    })
  }
  addItem(e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem)
  }
  present() {
    return (
      <div className="todo">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input type="text" placeholder="enter text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    )
  }
}

export default App;
