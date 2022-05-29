import { Component } from 'react';

class ContactsForm extends Component {
  static defaultProps = {
    name: '',
  };
  state = {
    name: this.props.name,
  };
  render() {
    return (
      <form>
        <label htmlFor="">rt</label>
      </form>
    );
  }
}

export default ContactsForm;
