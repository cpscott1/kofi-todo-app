import { Komponent, render } from 'kofujs'

class NewTodoForm extends Komponent {
  present() {
    return (
      <form>
        <input type="text" />
      </form>
    )
  }
}

export default NewTodoForm;
