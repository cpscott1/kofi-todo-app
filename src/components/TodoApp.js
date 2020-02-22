import { Komponent, render } from 'kofujs'

class TodoApp extends Komponent {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

    present () {
      console.log('rendering')
      return (
        <div>
          <h1>Hey Guys</h1>
        </div>
      )
    }
}

export default TodoApp;
