import { Komponent , render} from 'kofujs'
import TodoApp from './components/TodoApp.js';
const styles = {
  mainPageHeading: {
    backgroundColor: 'red'
  }
}

class Example extends Komponent{
  constructor (props)  {
    super (props)

    this.classes = this.setStyles(styles).classes
  }

  komponentDidMount () {
    console.log('Hello world')
  }


  present () {
    return (
        <TodoApp/>
    )
  }
}

render(<Example />, document.getElementById('app'))
