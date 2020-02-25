import { Komponent , render} from 'kofujs'
import App from './App';
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
        <App/>
    )
  }
}

render(<Example />, document.getElementById('app'))
